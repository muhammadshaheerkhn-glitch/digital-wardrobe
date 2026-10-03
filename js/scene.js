import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createScene(viewer) {
    // ------------------------------
    // Scene
    // ------------------------------

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#E7E1D7");

    // ------------------------------
    // Camera
    // ------------------------------

    const camera = new THREE.PerspectiveCamera(
        40,
        viewer.clientWidth / viewer.clientHeight,
        0.1,
        100
    );

    const defaultCameraPosition = new THREE.Vector3(0, 1.7, 5.8);
    const defaultTarget = new THREE.Vector3(0, 1.4, 0);

    camera.position.copy(defaultCameraPosition);

    // ------------------------------
    // Renderer
    // ------------------------------

    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(viewer.clientWidth, viewer.clientHeight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    viewer.appendChild(renderer.domElement);

    // ------------------------------
    // Camera controls
    // ------------------------------

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.target.copy(defaultTarget);

    controls.enablePan = false;
    controls.enableZoom = true;

    controls.minDistance = 3.3;
    controls.maxDistance = 8;

    controls.minPolarAngle = THREE.MathUtils.degToRad(65);
    // At distance 8, target.y + 8 * cos(100 degrees) stays above y = 0.
    controls.maxPolarAngle = THREE.MathUtils.degToRad(100);

    controls.update();

    // ------------------------------
    // Materials
    // ------------------------------

    const floorMaterial = new THREE.MeshStandardMaterial({
        color: "#C7BFB3",
        roughness: 0.94,
        metalness: 0
    });

    const backWallMaterial = new THREE.MeshStandardMaterial({
        color: "#E7E1D7",
        roughness: 1,
        metalness: 0
    });

    const sideWallMaterial = new THREE.MeshStandardMaterial({
        color: "#DED7CD",
        roughness: 1,
        metalness: 0
    });

    const panelLineMaterial = new THREE.MeshStandardMaterial({
        color: "#D3CBC0",
        roughness: 1,
        metalness: 0
    });

    // ------------------------------
    // Room geometry: one-sided architectural backdrop
    // ------------------------------

    // Preserve the front composition and keep walls outside the orbit radius.
    const roomWidth = 17;
    const roomDepth = 26;
    const roomHeight = 8;
    // Permanent ground level: the future avatar stands at (0, 0, 0).
    const floorLevel = 0;
    const wallCenterY = floorLevel + roomHeight / 2;
    const ceilingLevel = floorLevel + roomHeight;
    const halfWidth = roomWidth / 2;
    const halfDepth = roomDepth / 2;

    // PlaneGeometry faces local +Z. Rotate each plane toward the room interior.
    // Materials use the default FrontSide: no slab backs or solid edge faces.
    function addRoomPlane(width, height, material, x, y, z) {
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height), material
        );
        mesh.position.set(x, y, z);
        // Keep the architectural shell out of the studio-light shadow map.
        mesh.receiveShadow = false;
        scene.add(mesh);
        return mesh;
    }

    // Floor faces upward; the complete surface lies exactly at y = 0.
    const floor = addRoomPlane(roomWidth, roomDepth, floorMaterial,
        0, floorLevel, 0);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;

    // ------------------------------
    // Symmetrical back-wall panels and shallow reveals
    // ------------------------------

    // Backing and panels all face +Z, so none renders an opaque rear face.
    addRoomPlane(roomWidth, roomHeight, panelLineMaterial,
        0, wallCenterY, -halfDepth);

    const panelCount = 13;
    const panelWidth = roomWidth / panelCount;
    const panelGap = 0.028;

    for (let index = 0; index < panelCount; index += 1) {
        const x = -roomWidth / 2 + panelWidth * (index + 0.5);
        // Match the previous panel fronts without adding floating solid blocks.
        const offset = index % 2 === 0 ? 0.06 : 0.035;
        const panel = addRoomPlane(
            panelWidth - panelGap, roomHeight, backWallMaterial,
            x, wallCenterY, -halfDepth + offset
        );
        panel.castShadow = true;
        panel.receiveShadow = true;
    }

    // ------------------------------
    // Inward-facing side walls and reverse-view backdrop
    // ------------------------------

    const leftWall = addRoomPlane(roomDepth, roomHeight, sideWallMaterial,
        -halfWidth, wallCenterY, 0);
    leftWall.rotation.y = Math.PI / 2;

    const rightWall = addRoomPlane(roomDepth, roomHeight, sideWallMaterial,
        halfWidth, wallCenterY, 0);
    rightWall.rotation.y = -Math.PI / 2;

    const frontWall = addRoomPlane(roomWidth, roomHeight, backWallMaterial,
        0, wallCenterY, halfDepth);
    frontWall.rotation.y = Math.PI;

    // Low trim is also one-sided and follows the corresponding wall normal.
    for (const direction of [-1, 1]) {
        const endTrim = addRoomPlane(roomWidth, 0.06, sideWallMaterial,
            0, floorLevel + 0.03, direction * (halfDepth - 0.06));
        endTrim.rotation.y = direction === -1 ? 0 : Math.PI;

        const sideTrim = addRoomPlane(roomDepth, 0.06, sideWallMaterial,
            direction * (halfWidth - 0.06), floorLevel + 0.03, 0);
        sideTrim.rotation.y = -direction * Math.PI / 2;
    }

    // ------------------------------
    // One-sided ceiling and quiet upper boundary
    // ------------------------------

    const ceiling = addRoomPlane(roomWidth, roomDepth, backWallMaterial,
        0, ceilingLevel, 0);
    ceiling.rotation.x = Math.PI / 2;

    // Thin wall-facing strips retain the upper framing without beam backs.
    for (const direction of [-1, 1]) {
        const endFrame = addRoomPlane(roomWidth, 0.045, backWallMaterial,
            0, ceilingLevel - 0.0225, direction * (halfDepth - 0.12));
        endFrame.rotation.y = direction === -1 ? 0 : Math.PI;

        const sideFrame = addRoomPlane(roomDepth - 0.24, 0.045, backWallMaterial,
            direction * (halfWidth - 0.12), ceilingLevel - 0.0225, 0);
        sideFrame.rotation.y = -direction * Math.PI / 2;
    }

    // Keep the central presentation area empty and the floor uninterrupted.

    // ------------------------------
    // Soft, neutral studio lighting
    // ------------------------------

    const upperLight = new THREE.HemisphereLight(
        "#FFFFFF", "#DED7CD", 0.4
    );
    scene.add(upperLight);

    // Modest neutral room bounce also lights downward-facing surfaces.
    const ambientLight = new THREE.AmbientLight("#FFFFFF", 0.45);
    scene.add(ambientLight);

    // Warm-neutral key above and to the front-left.
    const mainLight = new THREE.DirectionalLight("#FFF4E8", 1.6);
    mainLight.position.set(-3.5, 4.4, 4.5);
    mainLight.target.position.set(0, 0.8, 0);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.set(2048, 2048);
    mainLight.shadow.camera.left = -16;
    mainLight.shadow.camera.right = 16;
    mainLight.shadow.camera.top = 14;
    mainLight.shadow.camera.bottom = -14;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 45;
    mainLight.shadow.bias = -0.0002;
    mainLight.shadow.normalBias = 0.025;
    // Variance shadows support blur; PCFSoft ignores shadow.radius.
    mainLight.shadow.radius = 4;
    mainLight.shadow.blurSamples = 8;
    scene.add(mainLight, mainLight.target);

    // Softer cool-neutral fill and hemisphere light keep all views readable.
    const fillLight = new THREE.DirectionalLight("#F3F6FA", 1.4);
    fillLight.position.set(3.5, 4.4, 4.5);
    fillLight.target.position.set(0, 0.8, 0);
    scene.add(fillLight, fillLight.target);

    // ------------------------------
    // Rendering
    // ------------------------------

    function render() {
        renderer.render(scene, camera);
    }

    controls.addEventListener("change", render);

    render();

    // ------------------------------
    // Resize handling
    // ------------------------------

    function handleResize() {
        const width = viewer.clientWidth;
        const height = viewer.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        render();
    }

    window.addEventListener("resize", handleResize);

    // ------------------------------
    // Reset camera
    // ------------------------------

    function resetCamera() {
        camera.position.copy(defaultCameraPosition);
        controls.target.copy(defaultTarget);

        controls.update();
        render();
    }

    return {
        resetCamera
    };
}