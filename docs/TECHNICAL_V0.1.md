# Digital Wardrobe
## Technical Plan v0.1

**Version:** 0.1  
**Purpose:** Define how Digital Wardrobe v0.1 will be built.

---

# 1. Purpose

This document defines the technical implementation of Digital Wardrobe v0.1.

The product requirements are defined separately in:

`docs/MVP_V0.1.md`

The relationship is:

- `MVP_V0.1.md` = what the application must do
- `TECHNICAL_V0.1.md` = how we will build it

This document is not a Codex prompt.

---

# 2. Technical Philosophy

Version 0.1 uses the simplest tools that can correctly build the product.

The architecture should be understandable by a first-year Computer Science student.

We will not introduce frameworks simply because they are popular.

The goal is:

> Build a professional 3D application while understanding how its major parts work.

---

# 3. Languages

Version 0.1 uses:

- HTML
- CSS
- JavaScript

Python is used only to run the local development server.

---

# 4. HTML

Main file:

`index.html`

HTML defines the structure of the application.

It contains:

- loading screen
- error screen
- wardrobe panel
- Digital Wardrobe title
- category tabs
- wardrobe item area
- Reset Outfit button
- 3D viewer container
- Reset Camera button
- minimum-screen-size message

HTML does not contain the 3D implementation.

---

# 5. CSS

Main file:

`css/style.css`

CSS controls:

- layout
- exact colors
- typography
- spacing
- wardrobe cards
- category tabs
- selected states
- buttons
- hover states
- keyboard focus states
- loading screen
- error screen
- minimum viewport behavior

The visual design must follow:

`docs/MVP_V0.1.md`

CSS must not invent a different visual style.

---

# 6. JavaScript

JavaScript controls application behavior.

It handles:

- starting the application
- loading 3D assets
- creating the 3D scene
- wardrobe category switching
- clothing selection
- clothing removal
- Reset Outfit
- camera controls
- Reset Camera
- application state
- loading state
- load errors

JavaScript uses standard browser ES modules.

---

# 7. Python

Python is not an application backend in Version 0.1.

Python is used only to run the application locally.

Development command:

```powershell
python -m http.server 8000
```

The application is opened at:

```text
http://localhost:8000
```

The project should not normally be run by double-clicking `index.html`.

---

# 8. Three.js

Three.js is the only 3D JavaScript library used in Version 0.1.

Three.js handles:

- 3D scene
- renderer
- avatar
- clothing
- room
- camera
- lighting
- materials
- shadows

Three.js is a JavaScript library, not a separate programming language.

---

# 9. Three.js Modules

Version 0.1 uses:

## GLTFLoader

Used to load the avatar and clothing GLB model.

## OrbitControls

Used for:

- horizontal camera rotation
- limited vertical camera rotation
- zoom
- disabled camera panning

No additional 3D framework is required.

---

# 10. Technologies Not Used

Version 0.1 does not use:

- React
- React Three Fiber
- TypeScript
- Next.js
- Vue
- Angular
- Tailwind CSS
- Bootstrap
- FastAPI
- Flask
- Express
- PostgreSQL
- SQLite
- MongoDB
- Firebase
- Supabase
- Docker
- authentication frameworks

These technologies may be considered later if a real need appears.

---

# 11. Build System

Version 0.1 does not require a complex build system.

There is:

- no Webpack
- no Vite requirement
- no transpilation
- no npm application build step

HTML, CSS, and JavaScript run directly in the browser.

---

# 12. 3D Asset Format

The main 3D asset format is:

`.glb`

GLB files are loaded directly into Three.js.

---

# 13. Blender

Blender is used to prepare the 3D assets.

Blender is responsible for:

- standard male avatar
- boxer briefs
- socks
- T-shirt model
- jeans model
- sneaker model
- watch model
- garment fitting
- correcting clipping
- materials
- mesh names
- GLB export

Blender is not part of the running web application.

---

# 14. v0.1 3D Asset Strategy

Version 0.1 uses one main GLB file:

`assets/models/avatar-wardrobe.glb`

The GLB contains:

- standard male avatar
- boxer briefs
- crew socks
- White T-shirt
- Black T-shirt
- Navy T-shirt
- Dark Blue Jeans
- Black Jeans
- Light Blue Jeans
- White Sneakers
- Black Sneakers
- Silver Watch

All garments are prepared specifically for the same avatar.

---

# 15. Why One GLB Is Used

Using one GLB keeps Version 0.1 simple.

Benefits:

- all garments share the same coordinate system
- clothing is already positioned correctly
- no runtime garment alignment system is required
- fewer files need to be loaded
- clothing can be switched using mesh visibility
- easier debugging
- easier Blender workflow

Later versions may use separate clothing files.

---

# 16. Required Mesh Names

Objects inside the GLB use these logical names:

```text
AvatarBody

BoxerBriefs
CrewSocks

TShirtWhite
TShirtBlack
TShirtNavy

JeansDarkBlue
JeansBlack
JeansLightBlue

SneakersWhite
SneakersBlack

WatchSilver
```

Predictable names allow JavaScript to find the correct mesh.

---

# 17. Initial Mesh Visibility

When the application starts:

Visible:

```text
AvatarBody
BoxerBriefs
CrewSocks
```

Hidden:

```text
TShirtWhite
TShirtBlack
TShirtNavy

JeansDarkBlue
JeansBlack
JeansLightBlue

SneakersWhite
SneakersBlack

WatchSilver
```

This produces the Base Outfit defined in `MVP_V0.1.md`.

---

# 18. Clothing Switching

All selectable clothing already exists inside the loaded GLB.

JavaScript switches clothing by changing mesh visibility.

Example:

User selects Black T-shirt.

The application:

1. hides White T-shirt
2. hides Navy T-shirt
3. shows Black T-shirt
4. updates application state
5. updates the selected wardrobe card

The avatar is not reloaded.

---

# 19. Permanent Garments

These meshes always remain visible:

```text
BoxerBriefs
CrewSocks
```

Normal wardrobe controls cannot hide them.

---

# 20. Application State

The outfit state contains exactly four values:

```javascript
{
    top: null,
    bottom: null,
    shoes: null,
    watch: null
}
```

Initial state:

```javascript
{
    top: null,
    bottom: null,
    shoes: null,
    watch: null
}
```

`null` means nothing is selected in that slot.

---

# 21. Example Outfit State

Example:

```javascript
{
    top: "tshirt-navy",
    bottom: "jeans-black",
    shoes: "sneakers-white",
    watch: "watch-silver"
}
```

Boxer briefs and socks are not stored because they are permanent.

---

# 22. Stable Item IDs

Version 0.1 uses:

```text
tshirt-white
tshirt-black
tshirt-navy

jeans-dark-blue
jeans-black
jeans-light-blue

sneakers-white
sneakers-black

watch-silver
```

---

# 23. Wardrobe Item Data

Each selectable wardrobe item contains:

- id
- name
- category
- mesh name
- thumbnail path

Example:

```javascript
{
    id: "tshirt-black",
    name: "Black T-shirt",
    category: "tops",
    meshName: "TShirtBlack",
    thumbnail: "assets/images/thumbnails/tshirt-black.png"
}
```

---

# 24. Project Structure

The Version 0.1 project structure is:

```text
digital-wardrobe/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── scene.js
│   ├── wardrobe.js
│   ├── state.js
│   └── data.js
│
├── assets/
│   ├── models/
│   │   └── avatar-wardrobe.glb
│   │
│   └── images/
│       └── thumbnails/
│           ├── tshirt-white.png
│           ├── tshirt-black.png
│           ├── tshirt-navy.png
│           ├── jeans-dark-blue.png
│           ├── jeans-black.png
│           ├── jeans-light-blue.png
│           ├── sneakers-white.png
│           ├── sneakers-black.png
│           └── watch-silver.png
│
├── vendor/
│   └── three/
│
├── docs/
│   ├── FINAL_VISION.md
│   ├── MVP_V0.1.md
│   └── TECHNICAL_V0.1.md
│
├── README.md
└── .gitignore
```

---

# 25. main.js

`js/main.js` is the application entry point.

It:

1. checks viewport size
2. shows loading state
3. initializes the 3D scene
4. loads the avatar/wardrobe GLB
5. initializes the wardrobe UI
6. connects UI state to the 3D scene
7. hides the loading screen
8. shows the application
9. handles startup errors

---

# 26. scene.js

`js/scene.js` manages Three.js.

It contains:

- scene
- WebGL renderer
- PerspectiveCamera
- OrbitControls
- GLTFLoader
- avatar model
- garment mesh references
- dressing-room geometry
- lighting
- shadows
- mesh visibility
- Reset Camera
- resize handling

---

# 27. wardrobe.js

`js/wardrobe.js` manages the wardrobe UI.

It handles:

- category tabs
- item cards
- item clicks
- selected `WEARING` state
- remove actions
- Reset Outfit

---

# 28. state.js

`js/state.js` stores current outfit state.

It manages:

- top
- bottom
- shoes
- watch

It provides simple functions for:

- setting a slot
- clearing a slot
- resetting all selectable clothing
- reading current state

No state-management library is used.

---

# 29. data.js

`js/data.js` contains fixed Version 0.1 data.

It defines:

- category names
- item IDs
- item display names
- GLB mesh names
- thumbnail paths

It contains no UI behavior.

---

# 30. Dressing Room Geometry

The Version 0.1 room is created directly with Three.js.

A separate room GLB is not required.

The room contains:

- floor
- back wall
- left wall
- right wall
- subtle vertical panel details

Simple geometry is sufficient.

---

# 31. Dressing Room Materials

Three.js materials reproduce the exact environment colors defined in:

`docs/MVP_V0.1.md`

The room uses matte materials.

There are no:

- reflective mirrors
- complex environment effects
- animated materials

---

# 32. Lighting

The scene contains:

- one main light
- one fill light
- low ambient/environment lighting

The lighting must visually match the product specification.

There is:

- no colored lighting
- no animated lighting
- no neon lighting

---

# 33. Shadows

The renderer enables shadows.

The avatar and clothing cast shadows.

The floor receives shadows.

The shadows must remain soft and visually appropriate for the MVP.

---

# 34. Camera

Version 0.1 uses one:

`PerspectiveCamera`

The initial camera shows:

- full avatar
- front view
- correct framing defined in `MVP_V0.1.md`

---

# 35. OrbitControls Configuration

OrbitControls uses:

```text
horizontal rotation = enabled
vertical rotation = enabled with limits
zoom = enabled
pan = disabled
```

The exact camera limits come from `MVP_V0.1.md`.

---

# 36. Reset Camera

The initial:

- camera position
- control target

are stored.

Pressing Reset Camera restores those values.

It does not recreate the scene.

---

# 37. Reset Outfit

Reset Outfit sets:

```javascript
{
    top: null,
    bottom: null,
    shoes: null,
    watch: null
}
```

All nine selectable clothing meshes become hidden.

Boxer briefs and socks remain visible.

---

# 38. Removing One Item

Removing clothing changes only one slot.

Example:

```text
bottom = null
```

Top, shoes, and watch remain unchanged.

---

# 39. Thumbnails

Wardrobe cards use static PNG thumbnails.

Where possible, thumbnails are created from the actual Version 0.1 garment assets.

This keeps the wardrobe cards visually consistent with the 3D clothing.

---

# 40. Fonts

The interface uses:

- Cormorant Garamond
- Source Sans 3

Fallbacks:

- Georgia
- Arial

The interface must remain usable if the web fonts fail.

---

# 41. Persistent Data

Version 0.1 stores no permanent data.

Outfit state exists only in JavaScript memory.

Refreshing the browser resets the outfit.

---

# 42. Error Handling

The application must handle:

- GLB load failure
- required Three.js initialization failure

If the application cannot initialize correctly:

- the incomplete dressing room remains hidden
- the defined error screen appears
- Retry is available

Errors are also written to the browser developer console.

---

# 43. Testing

Version 0.1 primarily uses manual testing against:

`docs/MVP_V0.1.md`

Each feature is tested as soon as it is implemented.

Required testing includes:

- startup
- loading
- failure state
- four categories
- all nine selectable items
- item replacement
- item removal
- Reset Outfit
- camera rotation
- vertical camera limits
- zoom
- Reset Camera
- refresh behavior
- Chrome
- Edge
- 1280 × 720
- 1440 × 900

---

# 44. Performance

The application should feel responsive on a normal modern laptop.

The following should feel immediate:

- category changes
- clothing changes
- removing clothing
- Reset Outfit
- Reset Camera

Camera movement should feel smooth.

---

# 45. Asset Optimization

Before release, the main GLB should avoid unnecessary:

- excessive polygons
- oversized textures
- duplicate materials
- unused meshes
- unused textures

Optimization must not visibly damage the quality required by the MVP.

---

# 46. Git Workflow

Development uses focused branches.

Examples:

```text
feature/project-shell
feature/3d-scene
feature/avatar
feature/wardrobe-ui
feature/clothing-switching
feature/camera-controls
```

Not every tiny correction requires its own branch.

---

# 47. Development Workflow

For each meaningful task:

1. start from clean `main`
2. create a focused branch
3. inspect existing code
4. define one small goal
5. use Codex where useful
6. review changes
7. run the application
8. test the feature
9. inspect `git diff`
10. commit
11. merge into `main`
12. push
13. delete completed branch

---

# 48. Codex

Codex is a development assistant.

Codex can:

- inspect code
- explain code
- propose approaches
- implement small approved changes
- help debug
- suggest tests

Codex does not decide what the product should contain.

The product specification remains:

`docs/MVP_V0.1.md`

---

# 49. Learning Requirement

When Codex creates important code, the project owner should understand:

- which file changed
- what the changed code does
- why it exists
- how it connects to the rest of the application
- how to test it

The project must not become an application generated by AI that the owner cannot explain.

---

# 50. Dependency Rule

Before adding another library, ask:

1. What problem does it solve?
2. Can standard JavaScript solve the problem clearly?
3. Is it required for Version 0.1?
4. Does it make the project harder to understand?
5. Does it create unnecessary maintenance?

Unnecessary dependencies are not added.

---

# 51. Future Features

Version 0.1 does not prepare unnecessary infrastructure for future:

- AI
- authentication
- database
- clothing uploads
- multiplayer
- Spotify
- cloud storage
- mobile application

Those systems will be designed when they are actually needed.

---

# 52. Technical Change Rule

If an important technical decision in this document turns out to be unsuitable:

1. stop implementation
2. identify the problem
3. compare alternatives
4. update this document
5. commit the technical change
6. continue development

Technical architecture should change deliberately.

---

# 53. Technology Summary

| Area | Technology |
|---|---|
| Page structure | HTML |
| Styling | CSS |
| Application logic | JavaScript |
| 3D rendering | Three.js |
| 3D model format | GLB |
| 3D asset preparation | Blender |
| Local development server | Python |
| Version control | Git |
| Repository | GitHub |
| Coding assistant | Codex |

---

# 54. Architecture Summary

```text
index.html
    |
    +-- style.css
    |
    +-- main.js
         |
         +-- scene.js
         |    |
         |    +-- Three.js
         |    +-- dressing room
         |    +-- avatar
         |    +-- clothing
         |    +-- lighting
         |    +-- camera
         |
         +-- wardrobe.js
         |    |
         |    +-- categories
         |    +-- item cards
         |    +-- remove controls
         |
         +-- state.js
         |    |
         |    +-- top
         |    +-- bottom
         |    +-- shoes
         |    +-- watch
         |
         +-- data.js
              |
              +-- wardrobe definitions
```

---

# 55. 3D Asset Flow

```text
Blender
   |
   +-- avatar
   +-- boxer briefs
   +-- socks
   +-- T-shirts
   +-- jeans
   +-- sneakers
   +-- watch
          |
          v
avatar-wardrobe.glb
          |
          v
GLTFLoader
          |
          v
Three.js
          |
          v
JavaScript changes mesh visibility
```

---

# 56. Final Technical Objective

The technical implementation succeeds when it produces the application defined in:

`docs/MVP_V0.1.md`

while remaining understandable to the project owner.

The purpose of Version 0.1 is not to use the largest number of technologies.

The purpose is to build the required 3D dressing-room experience correctly using the simplest reasonable tools.