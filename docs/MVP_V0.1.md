# Digital Wardrobe
## MVP v0.1 - Standard Avatar Dressing Room

**Version:** 0.1  
**Release type:** First working product release  
**Status:** Final v0.1 scope. Any product change requires an explicit specification update.

---

# 1. Purpose

Digital Wardrobe v0.1 is the first working version of the project.

The release contains one standard adult male 3D avatar inside one fixed modern dressing-room environment.

The user can dress the avatar using a small fixed wardrobe containing:

- 3 T-shirts
- 3 pairs of jeans
- 2 pairs of sneakers
- 1 watch

The avatar permanently wears:

- white boxer briefs
- white crew socks

The user can:

- inspect the avatar in 3D
- rotate the camera around the avatar
- zoom in and out
- select clothing
- replace clothing
- remove selectable clothing
- reset the outfit
- reset the camera

Version 0.1 exists to answer one product question:

> **Can dressing a standard 3D avatar feel simple, visually attractive, smooth, and enjoyable?**

Version 0.1 does not attempt to create a digital twin of the real user.

It establishes the core dressing-room experience on which later versions will be built.

---

# 2. Core Product Principle

The guiding principle is:

> **Powerful underneath, simple on the surface.**

A first-time user should understand the application without:

- onboarding
- instructions
- tutorials
- tooltips explaining basic navigation
- account creation
- configuration
- setup screens

The avatar and the wardrobe are the product.

Nothing should compete with them unnecessarily.

---

# 3. Release Scope Summary

Version 0.1 contains exactly:

- 1 standard male avatar
- 1 fixed dressing-room environment
- 2 permanent base garments
- 9 selectable wardrobe items
- 4 wardrobe categories
- clothing equip functionality
- clothing removal functionality
- camera rotation
- camera zoom
- camera reset
- outfit reset
- loading state
- load-failure state

Nothing else is required for Version 0.1.

---

# 4. Application Type

Version 0.1 is a desktop web application.

It opens directly in a web browser.

There is no separate desktop executable.

---

# 5. Supported Platform

Primary development platform:

- Windows desktop

Supported browsers:

- current Google Chrome
- current Microsoft Edge

Minimum supported viewport:

`1280 × 720`

Primary design viewport:

`1440 × 900`

The application is designed for a mouse and keyboard.

Version 0.1 does not support:

- phones
- tablets
- touch-first interaction
- mobile layouts
- Safari
- Firefox

---

# 6. Small Viewport Behavior

If the browser viewport is smaller than:

`1280 × 720`

the normal dressing-room interface does not appear.

Instead, the application displays a centered message:

`Digital Wardrobe v0.1 requires a desktop window of at least 1280 × 720.`

Background:

`#EAE4DA`

Text:

`#1C1A17`

No attempt is made to compress the full interface into a smaller layout.

---

# 7. Application Startup

The application does not expose partially loaded 3D assets.

When the application starts:

1. the loading screen appears
2. required avatar assets load
3. permanent garments load
4. all nine wardrobe items load
5. environment assets load
6. the application verifies that the required scene can render
7. the main dressing-room screen appears

The user must not briefly see:

- a headless avatar
- missing garments
- floating clothing
- missing textures
- broken materials
- incomplete lighting
- an empty 3D scene

---

# 8. Loading Screen

The loading screen uses a warm neutral background.

Background:

`#EAE4DA`

Centered heading:

`Digital Wardrobe`

Heading font:

`Cormorant Garamond`

Heading weight:

`600`

Heading size:

`34 px`

Heading color:

`#1C1A17`

Below the heading:

`Loading dressing room...`

Body font:

`Source Sans 3`

Body size:

`15 px`

Body color:

`#6E685F`

Below the text is one simple circular loading indicator.

Loader size:

`24 px`

Loader line width:

`2 px`

Loader primary color:

`#1C1A17`

Loader track color:

`#CFC7BB`

The loader is the only startup animation.

There is:

- no skeleton loading interface
- no progress percentage
- no promotional message
- no slideshow
- no tips carousel
- no decorative animation

---

# 9. Load Failure State

If a required asset fails to load, the main dressing room does not appear in a broken state.

The application displays:

`Dressing room could not be loaded.`

Below it:

`Please try again.`

A button labeled:

`Retry`

reloads the required application assets.

The error state uses the same visual language as the loading screen.

---

# 10. No Authentication

Version 0.1 contains:

- no login
- no signup
- no account creation
- no user profile
- no authentication
- no password
- no social login
- no onboarding

After loading, the user enters the dressing room immediately.

---

# 11. Main Screen

Version 0.1 contains exactly one primary application screen.

It has two areas:

1. Wardrobe Panel
2. 3D Dressing Room

There is:

- no top navigation bar
- no bottom navigation bar
- no hamburger menu
- no dashboard
- no home page
- no separate avatar page
- no separate settings page

---

# 12. Main Screen Dimensions

The application fills:

`100% viewport width`

and:

`100% viewport height`

The main application page itself does not vertically scroll.

---

# 13. Wardrobe Panel

The wardrobe panel is fixed to the left side.

Width:

`320 px`

Height:

`100% viewport height`

Background:

`#F1ECE4`

Right border:

`1 px solid #CFC8BE`

Horizontal padding:

`24 px`

Top padding:

`28 px`

Bottom padding:

`20 px`

The panel contains:

1. product title
2. wardrobe category tabs
3. item cards
4. contextual remove action
5. Reset Outfit button

---

# 14. 3D Viewer

The 3D viewer occupies all remaining screen space to the right of the wardrobe panel.

The viewer contains:

- dressing-room environment
- avatar
- base garments
- selected garments
- camera interaction
- Reset Camera control

The avatar is the dominant visual object.

---

# 15. Visual Design Direction

Version 0.1 uses a:

> **minimal fashion-editorial interface combined with a premium neutral 3D fitting room**

The design must feel:

- intentional
- calm
- mature
- fashion-oriented
- modern
- premium
- restrained
- simple

It must not resemble a generic AI startup or SaaS dashboard.

---

# 16. Interface Color Palette

## Primary text

`#1C1A17`

## Secondary text

`#6E685F`

## Muted text

`#918A81`

## Wardrobe panel

`#F1ECE4`

## Card background

`#F7F3EC`

## Card hover background

`#EEE8DF`

## Thumbnail background

`#E9E3DA`

## Standard border

`#CFC8BE`

## Strong border

`#1C1A17`

## Primary dark button

`#1C1A17`

## Primary dark button text

`#F7F3EC`

## Keyboard focus color

`#886A52`

No interface surface uses pure white as its dominant background.

---

# 17. Typography

The interface does not use Inter, Geist, or Space Grotesk as its visual identity.

## Product title and editorial headings

Font:

`Cormorant Garamond`

Fallback:

`Georgia, serif`

## Interface text

Font:

`Source Sans 3`

Fallback:

`Arial, sans-serif`

---

# 18. Product Title

The wardrobe panel displays:

`Digital Wardrobe`

Font:

`Cormorant Garamond`

Weight:

`600`

Size:

`30 px`

Line height:

`32 px`

Color:

`#1C1A17`

There is no logo in Version 0.1.

---

# 19. Interface Typography Sizes

## Category tabs

`15 px`

Weight:

`600`

## Wardrobe item names

`16 px`

Weight:

`500`

## Buttons

`15 px`

Weight:

`600`

## Secondary actions

`14 px`

Weight:

`500`

## Small state labels

`11 px`

Weight:

`600`

Letter spacing:

`0.06 em`

---

# 20. Interface Shape Language

The interface avoids excessive soft rounded components.

Standard card corner radius:

`2 px`

Button corner radius:

`2 px`

Thumbnail corner radius:

`0 px`

No interface component uses a pill shape.

There are no large rounded SaaS-style containers.

---

# 21. Interface Shadows

UI cards and buttons use:

`no drop shadows`

Visual hierarchy comes from:

- spacing
- typography
- borders
- proportion
- color contrast

Physical 3D shadows inside the dressing room are allowed and required.

---

# 22. Dressing-Room Environment

Version 0.1 contains exactly one environment.

The environment is:

> **Minimal Modern Dressing Room**

It is a real 3D environment, not a flat background image.

---

# 23. Environment Mood

The dressing room feels:

- calm
- neutral
- premium
- architectural
- clean
- spacious

It does not feel:

- futuristic
- cyberpunk
- game-like
- nightclub-like
- highly luxurious
- colorful
- decorative

---

# 24. Main Wall

Main wall color:

`#E7E1D7`

Surface:

matte

The wall contains subtle vertical architectural panel lines.

Panel line color:

`#D3CBC0`

The panel lines are evenly spaced and visually subtle.

---

# 25. Side Walls

Side wall color:

`#DED7CD`

Surface:

matte

The side walls provide visible room depth.

---

# 26. Floor

Floor color:

`#C7BFB3`

Material appearance:

smooth matte stone or fine concrete

The floor has:

- low reflectivity
- subtle natural texture
- visible contact shadow beneath the avatar

The floor does not behave like a mirror.

---

# 27. Environment Objects

Version 0.1 contains no furniture.

There are no:

- chairs
- sofas
- tables
- clothing racks
- mirrors
- shelves
- plants
- lamps used as decoration
- paintings
- posters
- screens
- logos
- signs

The room architecture itself provides the visual setting.

---

# 28. Environment Lighting

The lighting is soft and neutral.

## Main light

Color temperature:

`4500 K`

Position:

front-left and above avatar

Purpose:

define body and garment shape

## Fill light

Color temperature:

`5200 K`

Position:

front-right

Intensity:

lower than main light

Purpose:

prevent harsh dark areas

## Ambient environment light

Neutral white

Low intensity

Purpose:

maintain readable materials and skin tone

---

# 29. Lighting Result

The avatar must remain clearly readable from:

- front
- left side
- right side
- back

Lighting must not produce:

- dramatic darkness
- colored light
- neon light
- hard theatrical shadows
- strong glossy skin
- blown-out white clothing

---

# 30. 3D Shadows

The avatar and clothing cast soft physical shadows.

The primary visible shadow appears beneath and slightly behind the avatar.

Shadows are:

- soft-edged
- neutral
- subtle

They are part of the 3D scene only.

---

# 31. Avatar

Version 0.1 contains exactly one adult male avatar.

The avatar is a standard reference character.

He does not represent the real user.

---

# 32. Avatar Visual Style

The avatar is:

- realistically proportioned
- semi-realistic to realistic in rendering
- anatomically believable
- visually compatible with real-world clothing

The avatar is not:

- cartoon
- anime
- exaggerated
- superhero-like
- bodybuilder-like
- stylized like a mobile game character

---

# 33. Avatar Height

Reference height:

`180 cm`

---

# 34. Avatar Build

Body type:

`slim-average`

The avatar has:

- average shoulder width
- moderate chest definition
- moderate arm definition
- natural waist
- natural leg proportions

The avatar is not:

- heavily muscular
- extremely thin
- overweight
- exaggeratedly athletic

---

# 35. Avatar Skin Tone

Target visual skin tone under neutral lighting:

`#C58D72`

Description:

warm medium-light brown

Skin appearance:

- matte-natural
- subtle realistic variation
- no glossy plastic effect

---

# 36. Avatar Face

The avatar has:

- adult male facial structure
- neutral expression
- symmetrical natural features
- open eyes
- relaxed mouth

There is:

- no facial animation
- no makeup
- no exaggerated facial styling

---

# 37. Avatar Hair

Hair color:

`#2A211D`

Description:

dark brown

Hairstyle:

- short sides
- short-to-medium top
- neat natural texture
- no extreme fade
- no long hair
- no highly styled fashion haircut

The hairstyle is fixed.

---

# 38. Facial Hair

The avatar is:

`clean-shaven`

There is:

- no beard
- no moustache
- no visible stubble styling

---

# 39. Avatar Pose

The avatar stands upright.

Feet:

approximately shoulder-width apart

Head:

facing forward

Shoulders:

relaxed

Arms:

slightly separated from torso

Elbows:

relaxed

Hands:

naturally positioned with palms facing slightly inward

The pose must allow clear visibility of:

- T-shirt sleeves
- waist
- jeans
- shoes
- left wrist
- watch

---

# 40. Avatar Movement

The avatar remains in one fixed position.

The avatar cannot:

- walk
- run
- jump
- crouch
- sit
- move around the room

---

# 41. Avatar Animation

Version 0.1 contains no:

- idle animation
- breathing animation
- emotes
- dance
- gestures
- facial animation
- walking animation
- pose transitions

The avatar remains static.

The only motion comes from camera movement.

---

# 42. Permanent Base Garments

The avatar always wears exactly two permanent garments:

1. White Boxer Briefs
2. White Crew Socks

These garments cannot be:

- removed
- replaced
- recolored
- hidden

They do not appear as selectable wardrobe items.

---

# 43. White Boxer Briefs

Style:

plain boxer briefs

Color:

`#F1EFEA`

Material appearance:

soft matte cotton

Waistband:

same color as underwear

There is:

- no logo
- no text
- no pattern
- no contrasting waistband
- no branding

The boxer briefs remain underneath jeans.

---

# 44. White Crew Socks

Style:

plain crew socks

Color:

`#EFEEE9`

Material appearance:

soft cotton knit

Length:

mid-calf crew height

There is:

- no logo
- no stripe
- no graphic
- no branding

The socks remain underneath sneakers.

---

# 45. Base Outfit

After the application finishes loading, the avatar wears:

- White Boxer Briefs
- White Crew Socks

The avatar wears:

- no T-shirt
- no jeans
- no sneakers
- no watch

This state is called:

`Base Outfit`

---

# 46. Selectable Wardrobe

Version 0.1 contains exactly nine selectable items.

There are no additional selectable garments.

---

# 47. Tops

Exactly three T-shirts exist.

## White T-shirt

Color:

`#EEEDE8`

## Black T-shirt

Color:

`#1B1B1A`

## Navy T-shirt

Color:

`#202B43`

---

# 48. T-Shirt Design

All three T-shirts use the same garment shape.

Style:

- crew neck
- short sleeve
- standard fit
- normal torso length
- plain front
- plain back

Material appearance:

matte cotton jersey

The T-shirts contain:

- no logos
- no graphics
- no text
- no pockets
- no branding

Only color differs.

---

# 49. Bottoms

Exactly three pairs of jeans exist.

## Dark Blue Jeans

Color:

`#304761`

## Black Jeans

Color:

`#292826`

## Light Blue Jeans

Color:

`#7895AE`

---

# 50. Jeans Design

All three jeans use the same garment shape.

Style:

- full length
- medium rise
- standard waist
- straight-slim fit
- normal hem
- clean construction

Material appearance:

denim

The jeans contain:

- no brand patch
- no logos
- no tears
- no distressing
- no graphics
- no decorative embroidery

Only color and denim tone differ.

---

# 51. Shoes

Exactly two pairs of sneakers exist.

## White Sneakers

Upper color:

`#EEECE7`

Sole color:

`#DDD9D2`

Lace color:

`#EEECE7`

## Black Sneakers

Upper color:

`#20201F`

Sole color:

`#181817`

Lace color:

`#20201F`

---

# 52. Sneaker Design

Both sneaker options use the same model.

Style:

- low-top
- lace-up
- rounded toe
- simple everyday silhouette
- unbranded

The sneakers contain:

- no logo
- no stripes
- no graphic
- no text
- no visible brand reference

Only color differs.

---

# 53. Watch

Version 0.1 contains exactly one watch.

Name:

`Silver Watch`

Case:

circular

Case color:

`#B3B6B8`

Strap:

silver metal bracelet

Strap color:

`#AAAEB0`

Watch face:

dark charcoal

Face color:

`#202224`

Hour markings:

`#D7D7D3`

Hands:

`#D7D7D3`

The watch is analog.

---

# 54. Watch Placement

The Silver Watch is always worn on:

`left wrist`

The watch does not switch wrists.

---

# 55. Watch Design

The watch is:

- simple
- neutral
- medium-sized
- unbranded

There is:

- no smartwatch display
- no brand logo
- no decorative gemstone
- no chronograph complication
- no date window requirement

---

# 56. Exact Wardrobe Inventory

| Category | Item | Primary Color |
|---|---|---|
| Permanent | White Boxer Briefs | `#F1EFEA` |
| Permanent | White Crew Socks | `#EFEEE9` |
| Tops | White T-shirt | `#EEEDE8` |
| Tops | Black T-shirt | `#1B1B1A` |
| Tops | Navy T-shirt | `#202B43` |
| Bottoms | Dark Blue Jeans | `#304761` |
| Bottoms | Black Jeans | `#292826` |
| Bottoms | Light Blue Jeans | `#7895AE` |
| Shoes | White Sneakers | `#EEECE7` |
| Shoes | Black Sneakers | `#20201F` |
| Accessories | Silver Watch | `#B3B6B8` |

Selectable items:

`9`

Permanent base garments:

`2`

---

# 57. Clothing Slots

The selectable clothing system contains exactly four slots:

1. Top
2. Bottom
3. Shoes
4. Watch

Each slot contains either:

- one compatible item
- nothing

The permanent underwear and socks are not selectable slots.

---

# 58. Valid Outfit State

The avatar always wears:

- White Boxer Briefs
- White Crew Socks

The avatar may additionally wear:

- 0 or 1 T-shirt
- 0 or 1 pair of jeans
- 0 or 1 pair of sneakers
- 0 or 1 Silver Watch

---

# 59. Number of Supported Outfit States

Top states:

`4`

Bottom states:

`4`

Shoes states:

`3`

Watch states:

`2`

Total:

`4 × 4 × 3 × 2 = 96`

The state system must correctly support all:

`96`

valid combinations.

---

# 60. Wardrobe Categories

The wardrobe panel contains exactly four category tabs.

Order:

1. Tops
2. Bottoms
3. Shoes
4. Accessories

No category icons are used.

---

# 61. Initial Category

When the application first opens:

`Tops`

is selected.

No T-shirt card is selected because the avatar begins without a T-shirt.

---

# 62. Category Tabs

Inactive text color:

`#6E685F`

Active text color:

`#1C1A17`

Active tab uses a bottom border:

`2 px solid #1C1A17`

There is no colored tab background.

Tab spacing:

`18 px`

There is no animation when changing tabs.

---

# 63. Wardrobe Cards

Cards are displayed vertically.

Card width:

`100% of available wardrobe content width`

Card height:

`92 px`

Background:

`#F7F3EC`

Border:

`1 px solid #CFC8BE`

Corner radius:

`2 px`

Spacing between cards:

`12 px`

There is no card drop shadow.

---

# 64. Wardrobe Thumbnail

Each card contains one product-style garment thumbnail.

Thumbnail size:

`72 × 72 px`

Thumbnail background:

`#E9E3DA`

Corner radius:

`0 px`

The thumbnail contains only the item.

It does not contain:

- human model
- avatar
- decorative background
- text
- logo

---

# 65. Exact User-Facing Item Names

## Tops

- White T-shirt
- Black T-shirt
- Navy T-shirt

## Bottoms

- Dark Blue Jeans
- Black Jeans
- Light Blue Jeans

## Shoes

- White Sneakers
- Black Sneakers

## Accessories

- Silver Watch

No alternate naming is used in Version 0.1.

---

# 66. Card Hover State

When the mouse pointer is over a wardrobe card:

Background changes immediately to:

`#EEE8DF`

Cursor becomes:

`pointer`

There is:

- no scale effect
- no lifting effect
- no shadow
- no animated border
- no movement

---

# 67. Selected Card

When an item is currently worn:

Border:

`2 px solid #1C1A17`

A small state label appears in the upper-right area of the card:

`WEARING`

Label font:

`Source Sans 3`

Size:

`11 px`

Weight:

`600`

Color:

`#1C1A17`

There is no checkmark icon.

---

# 68. Equipping Clothing

The user equips an item by clicking its wardrobe card.

There is no drag-and-drop in Version 0.1.

When a card is clicked:

1. the item is equipped
2. any currently equipped item in the same slot is removed
3. the new item appears immediately
4. selected-card styling updates immediately

There is:

- no confirmation dialog
- no page reload
- no transition animation
- no dressing animation

---

# 69. Clicking an Equipped Item

Clicking an already equipped item does nothing.

The item remains equipped.

Removing clothing requires the explicit remove action.

---

# 70. Remove Actions

When the current category has an equipped item, one contextual text action appears below the item list.

Exact labels:

- `Remove Top`
- `Remove Bottom`
- `Remove Shoes`
- `Remove Watch`

If the relevant slot is empty, the remove action is hidden.

---

# 71. Remove Action Style

Font:

`Source Sans 3`

Size:

`14 px`

Weight:

`500`

Text color:

`#6E685F`

Background:

transparent

Border:

none

On hover:

text becomes:

`#1C1A17`

There is no animation.

---

# 72. Removing Top

Selecting:

`Remove Top`

removes the current T-shirt.

The avatar's upper torso becomes bare.

No other clothing changes.

---

# 73. Removing Bottom

Selecting:

`Remove Bottom`

removes the current jeans.

The permanent White Boxer Briefs become visible.

No other clothing changes.

---

# 74. Removing Shoes

Selecting:

`Remove Shoes`

removes the current sneakers.

The permanent White Crew Socks become fully visible.

No other clothing changes.

---

# 75. Removing Watch

Selecting:

`Remove Watch`

removes the Silver Watch.

The left wrist becomes bare.

No other clothing changes.

---

# 76. Reset Outfit Button

The Reset Outfit button is fixed near the bottom of the wardrobe panel.

Label:

`Reset Outfit`

Height:

`44 px`

Width:

`100%`

Background:

`#1C1A17`

Text:

`#F7F3EC`

Border:

`1 px solid #1C1A17`

Corner radius:

`2 px`

There is no drop shadow.

---

# 77. Reset Outfit Behavior

Selecting Reset Outfit removes:

- Top
- Bottom
- Shoes
- Watch

It preserves:

- White Boxer Briefs
- White Crew Socks

Reset Outfit does not:

- reload the page
- change the camera
- change the active wardrobe category

If the avatar is already in the Base Outfit, pressing Reset Outfit causes no visible change.

---

# 78. Camera Interaction

The camera orbits around the avatar.

The avatar itself remains stationary.

The user can:

- rotate horizontally
- rotate vertically within limits
- zoom
- reset the camera

---

# 79. Viewer Cursor

When the mouse is over an empty part of the 3D viewer:

Cursor:

`grab`

While rotating:

Cursor:

`grabbing`

---

# 80. Horizontal Camera Rotation

Input:

`hold left mouse button and drag horizontally`

Horizontal range:

`360 degrees`

The user can inspect:

- front
- left side
- back
- right side

---

# 81. Vertical Camera Rotation

Input:

`hold left mouse button and drag vertically`

Maximum camera elevation above default horizontal orbit:

`25 degrees`

Maximum camera depression below default horizontal orbit:

`15 degrees`

The camera cannot:

- move under the floor
- turn upside down
- reach extreme overhead angles

---

# 82. Camera Panning

Camera panning is disabled.

The camera target remains centered on the avatar.

---

# 83. Zoom

Input:

`mouse wheel`

The user can zoom close enough to inspect:

- shirt fit
- jeans fit
- sneakers
- watch

The camera cannot:

- enter the avatar body
- pass through the avatar
- zoom excessively far away

---

# 84. Default Camera Framing

Default view:

front-facing

The entire avatar is visible.

The avatar occupies:

`76% of viewer height`

There is visible space:

- above the head
- below the feet

The avatar is centered horizontally in the viewer.

---

# 85. Reset Camera Button

Reset Camera appears in the lower-right corner of the 3D viewer.

Label:

`Reset Camera`

Background:

`#F1ECE4`

Text:

`#1C1A17`

Border:

`1 px solid #CFC8BE`

Corner radius:

`2 px`

Padding:

`10 px 16 px`

There is no icon.

There is no drop shadow.

---

# 86. Reset Camera Behavior

Reset Camera restores:

- default front-facing angle
- default vertical camera angle
- default zoom

It does not alter:

- outfit
- active wardrobe category

---

# 87. Clothing Asset Behavior

All clothing needed for Version 0.1 loads during initial application loading.

After the dressing room appears:

- selecting clothing does not trigger a full-screen loader
- changing clothing does not reload the page
- changing clothing should appear immediate to the user

---

# 88. Clothing Fit Requirement

All Version 0.1 garments are prepared specifically for the single standard avatar.

During ordinary viewing:

- body must not visibly protrude through T-shirts
- body must not visibly protrude through jeans
- feet must not visibly protrude through sneakers
- socks must align correctly
- boxer briefs must align correctly
- watch must remain attached correctly to the left wrist

Obvious clipping during normal viewing blocks release.

Minor imperfections visible only at extreme close zoom are acceptable.

---

# 89. Clothing Layering

Version 0.1 supports only:

- boxer briefs beneath jeans
- socks beneath sneakers
- T-shirt on torso
- watch on left wrist

It does not support:

- jackets
- coats
- hoodies
- sweaters
- overshirts
- layered tops
- belts
- hats
- scarves
- necklaces
- rings
- bracelets

---

# 90. Outfit Persistence

Version 0.1 does not save outfit state.

Refreshing the page returns the avatar to:

- White Boxer Briefs
- White Crew Socks

Closing and reopening the application produces the same Base Outfit.

---

# 91. Browser Storage

Version 0.1 does not require outfit persistence through:

- localStorage
- sessionStorage
- cookies
- IndexedDB

The outfit is temporary application state only.

---

# 92. Backend and Data

Version 0.1 contains:

- no application backend
- no backend API
- no database
- no cloud storage
- no user data storage
- no user wardrobe storage
- no uploaded files

All Version 0.1 product functionality runs in the frontend.

---

# 93. Artificial Intelligence

Version 0.1 contains no AI functionality.

There is no:

- AI stylist
- chatbot
- clothing recognition
- computer vision
- recommendation engine
- generative clothing
- AI API

---

# 94. Personalization

The user cannot customize:

- avatar face
- avatar body
- avatar height
- body proportions
- skin tone
- hair
- facial hair
- clothing colors
- garment shapes
- environment

Every Version 0.1 user receives the same standard experience.

---

# 95. Real Clothing Uploads

Version 0.1 does not support:

- photographs of clothing
- image uploads
- clothing scans
- custom garment models
- custom textures
- user-created wardrobe items

All clothing is supplied by the application.

---

# 96. Audio

Version 0.1 contains no:

- music
- Spotify
- sound effects
- voice
- microphone access

---

# 97. Social Functionality

Version 0.1 contains no:

- friends
- invitations
- multiplayer
- shared dressing rooms
- voice chat
- outfit voting
- reactions
- messaging
- public profiles
- social feed

---

# 98. Explicitly Excluded Features

The following are outside Version 0.1:

- digital twins
- user-specific avatars
- body scanning
- face scanning
- photo-based avatar creation
- avatar customization
- multiple avatars
- female avatar
- clothing uploads
- AI stylist
- personal styling chatbot
- weather
- music
- Spotify
- emotes
- animations
- multiple environments
- lobby customization
- friends
- multiplayer
- voice chat
- saved outfits
- outfit history
- wardrobe analytics
- shopping
- travel packing
- calendar
- user accounts
- authentication
- backend services
- database
- cloud storage
- mobile application
- augmented reality
- virtual reality
- realistic cloth simulation
- cloth physics
- garment reconstruction
- virtual try-on AI

---

# 99. Asset Licensing

All assets used in Version 0.1 must be legally usable by the project.

Assets must be:

- original
- openly licensed for the required use
- purchased with appropriate rights
- or otherwise properly licensed

No visible third-party fashion branding is allowed.

There are no:

- Nike logos
- Adidas logos
- luxury-brand logos
- branded watch faces
- copyrighted game characters

---

# 100. Anti-Generic-AI Design Rules

Version 0.1 must not look like a generic AI-generated SaaS interface.

The interface must not use:

- harsh gradients
- rainbow color schemes
- neon colors
- purple-and-black AI styling
- generic pastel-tech color schemes
- glassmorphism
- liquid-glass effects
- decorative radial orbs
- dot-grid backgrounds
- random decorative blobs
- decorative colored side stripes
- excessive drop shadows
- excessive rounded corners
- pill-shaped controls without functional reason
- bento-grid layouts
- three-card marketing layouts
- terminal-window visual gimmicks
- sparkle icons
- emoji decoration
- Lucide icons as the default visual identity
- generic icon collections where text is clearer
- animated arrows
- hover animations on every object
- decorative motion
- skeleton loading screens
- fake testimonials
- pricing tables
- fake product reviews
- generic AI marketing language
- placeholder marketing content

---

# 101. Typography Guardrail

The application must not use:

- Inter
- Geist
- Space Grotesk

as its entire visual identity.

The defined combination is:

- Cormorant Garamond for product/editorial identity
- Source Sans 3 for interface usability

---

# 102. Copywriting Guardrail

Version 0.1 contains almost no marketing copy.

It must not use generic phrases such as:

- revolutionary
- next-generation
- AI-powered future of fashion
- transform your wardrobe
- elevate your style
- it is not X, it is Y

The product demonstrates itself through the actual dressing-room experience.

---

# 103. Product Demo Requirement

Version 0.1 does not use a fake product mockup as the primary experience.

The actual working 3D dressing room is the product demo.

The avatar, clothing interaction, and camera are real application functionality.

---

# 104. No Marketing Landing Page

Version 0.1 does not include a separate SaaS-style landing page.

There is no:

- hero section
- three-feature-card row
- pricing table
- testimonials section
- product waitlist
- animated marketing page

The user enters the working product directly.

---

# 105. Privacy and Terms

Version 0.1 stores no personal user information and contains no account system.

During local development, Privacy and Terms pages are not part of the dressing-room interface.

Before the project is made publicly available on the internet as a real hosted product, actual Privacy and Terms pages must be created based on the application's real behavior.

Placeholder or fabricated legal text must not be used.

---

# 106. Interaction Animation Policy

The only required continuous animation in Version 0.1 is the loading indicator.

Normal interface interactions change immediately.

There are no decorative animations.

There is no motion simply to make the interface appear more sophisticated.

---

# 107. Accessibility Basics

All wardrobe cards and buttons must be reachable using keyboard focus.

Keyboard activation:

- `Enter`
- `Space`

A focused interactive element displays:

`2 px solid #886A52`

focus outline.

The focus indicator must not rely solely on color changes inside the element.

The 3D camera interaction itself is mouse-controlled in Version 0.1.

---

# 108. Interaction Clarity

Every interactive element must have a clear purpose.

There are no controls that:

- do nothing
- open empty menus
- represent future features
- advertise unavailable functionality

Version 0.1 displays only working Version 0.1 actions.

---

# 109. Complete User Flow

The complete Version 0.1 user experience is:

1. User opens Digital Wardrobe.
2. Loading screen appears.
3. Required assets load.
4. Main dressing room appears.
5. Tops category is selected.
6. Standard male avatar appears.
7. Avatar wears White Boxer Briefs.
8. Avatar wears White Crew Socks.
9. Avatar wears no selectable clothing.
10. User rotates the camera.
11. User zooms the camera.
12. User selects one of three T-shirts.
13. T-shirt appears immediately.
14. User selects Bottoms.
15. User selects one of three jeans.
16. Jeans appear over the boxer briefs.
17. User selects Shoes.
18. User selects one of two sneakers.
19. Sneakers appear over the socks.
20. User selects Accessories.
21. User selects Silver Watch.
22. Silver Watch appears on the left wrist.
23. User switches items to compare combinations.
24. User removes individual garments when desired.
25. User inspects the avatar from different angles.
26. User can reset the camera.
27. User can reset the outfit.
28. Reset Outfit returns the avatar to White Boxer Briefs and White Crew Socks.
29. Refreshing the browser returns the avatar to the same Base Outfit.

This is the complete Version 0.1 product flow.

---

# 110. Definition of Done

Version 0.1 is complete only when every requirement below is satisfied.

## Startup

- loading screen renders correctly
- required assets load before main interface
- broken partial avatar state is never exposed
- load failure produces the defined error state
- Retry works

## Desktop Layout

- application fills viewport
- wardrobe panel is 320 px wide
- 3D viewer occupies remaining space
- interface works at 1280 × 720
- interface matches primary design at 1440 × 900
- smaller viewport produces the defined unsupported-size message

## Visual Design

- defined fonts are used
- defined interface palette is used
- no pure-white dominant interface
- no gradients are used
- no UI drop shadows are used
- corner radii match specification
- no generic AI/SaaS decorative patterns are present

## Lobby

- correct wall colors render
- correct floor color renders
- panel lines are subtle
- lighting is neutral
- soft physical shadows work
- no unintended furniture or decorations exist

## Avatar

- one standard male avatar renders correctly
- avatar matches the defined general appearance
- avatar remains stationary
- avatar remains in neutral pose
- avatar does not animate

## Permanent Garments

- White Boxer Briefs always render
- White Crew Socks always render
- neither can be removed
- neither appears as a wardrobe card

## Tops

- White T-shirt works
- Black T-shirt works
- Navy T-shirt works
- only one Top can be equipped
- switching works
- Remove Top works

## Bottoms

- Dark Blue Jeans work
- Black Jeans work
- Light Blue Jeans work
- only one Bottom can be equipped
- switching works
- Remove Bottom works
- boxer briefs remain underneath

## Shoes

- White Sneakers work
- Black Sneakers work
- only one Shoes item can be equipped
- switching works
- Remove Shoes works
- socks remain underneath

## Watch

- Silver Watch renders correctly
- Silver Watch appears on left wrist
- Silver Watch can be equipped
- Remove Watch works

## Wardrobe

- four categories exist
- category order matches specification
- Tops is active on startup
- exact item names are used
- thumbnails render
- card hover state works
- selected state uses `WEARING`
- no checkmark icon is used
- remove actions appear only when appropriate

## Camera

- horizontal rotation works through 360 degrees
- vertical rotation respects limits
- panning is disabled
- zoom works
- camera cannot enter avatar
- Reset Camera works
- Reset Camera does not change clothing

## Outfit State

- all 96 valid outfit combinations are supported
- selection replaces only the same clothing slot
- clicking equipped item leaves it equipped
- garment changes require no reload
- Reset Outfit returns to Base Outfit
- Reset Outfit preserves active category
- refreshing returns to Base Outfit

## Fit and Rendering

- no obvious T-shirt clipping during normal viewing
- no obvious jeans clipping during normal viewing
- sneakers align correctly
- socks align correctly
- boxer briefs align correctly
- watch remains attached correctly
- clothing materials are visually distinguishable
- white garments remain readable under lighting

## Scope

- no account system exists
- no backend exists
- no database exists
- no AI exists
- no music exists
- no multiplayer exists
- no extra clothing exists
- no unapproved v0.1 features exist

---

# 111. Release Scope Rule

After this specification is committed, Version 0.1 scope is considered final.

A feature is not added simply because:

- it is easy to implement
- it looks interesting
- an AI coding assistant suggests it
- a framework includes it
- another application has it

If an existing v0.1 requirement genuinely needs to change:

1. discuss the change
2. update this specification
3. review the specification change
4. commit the specification change
5. only then change the product

New ideas belong to later releases.

---

# 112. Version 0.1 Summary

Digital Wardrobe v0.1 is:

> **A minimal desktop 3D dressing room containing one fixed standard male
> avatar permanently wearing white boxer briefs and white crew socks, with
> three T-shirts, three jeans, two pairs of sneakers, and one watch available
> for selection.**

The user can:

- dress the avatar
- replace clothing
- remove clothing
- rotate the camera
- zoom
- reset the camera
- reset the outfit

The experience is intentionally small.

The objective is to make these basic interactions feel excellent before the project becomes more complex.

---

# 113. Release Success Test

A person who has never seen Digital Wardrobe should be able to open Version 0.1 and understand what to do without instructions.

They should be able to:

1. recognize that the character can be dressed
2. choose clothes immediately
3. see the result immediately
4. inspect the result comfortably
5. try several combinations without confusion

The final success question is:

> **Does this already feel like the beginning of the Digital Wardrobe we imagined?**

If the answer is yes, Version 0.1 has achieved its purpose.