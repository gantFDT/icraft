# Release Notes - 1.4.3 (2025-5-27)

![iCraft Editor](https://raw.githubusercontent.com/gantFDT/icraft/main/public/images/banner.jpg)

## Editor
### New Features
- Added drawing of basic element types such as spheres, cones, and tori.
- Added drawing functionality for polygonal faces in 3D scenes.
- Added SVG type elements, supporting SVG import and SVG extrusion height.
- Added custom TransformControl, supporting translation, rotation, and scaling of objects in 3D scenes.
- Added SizeControl, supporting changing the length, width, and height of cubes in 3D scenes.
- Added 14 optional environment maps.
- Added SliderInput control.
- Website added GLB|GLTF compression function page.
- Added support for directly compressing models in the embedded information panel.
- Added shortcut key switches for grid snapping, object connection snapping, and connection tool display.


### Feature Optimizations
- Optimized frame rate when dragging and moving complex models.
- Optimized the positioning logic for newly added external models via drag and drop.
- Optimized the Tip direction of objects after rotation.
- Optimized text alignment controls.
- Optimized menu UI.
- Optimized attribute panel UI.
- Optimized logic for geometric center point, bottom center point, ground snapping, and connection lines.
- Cubes now support rounded corners.
- Optimized drag-and-drop sorting logic for multiple selected animation nodes.
- Optimized element tree list.
- Optimized object selection effect and stroke effect.
- Optimized undo/redo logic: element selection, plane editing, and line drawing now support undo/redo.
- Online asset upload now supports optional GLB compression.
- Hold spacebar + left mouse button to pan the canvas.

### Bug Fixes
- Fixed an issue where Chinese characters could not be edited in some cases.
- Fixed an issue where elements could not restore their scale during animation playback.
- Fixed an issue where tooltips for images in animations could not be removed; fixed fadeOut animation type.
- Fixed an issue where 90-degree rotation snapping did not work in some cases.
- Fixed a bug where translation operations could be undone but not redone.


## Player
### New Features
- Player integrated DracoLoader
