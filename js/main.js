import { createScene } from "./scene.js";

const viewer = document.querySelector(".viewer");
const resetCameraButton = document.querySelector(".reset-camera-button");
const viewerPlaceholder = document.querySelector(".viewer-placeholder");

const scene = createScene(viewer);

viewerPlaceholder.remove();

resetCameraButton.addEventListener("click", () => {
    scene.resetCamera();
});