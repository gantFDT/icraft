# Release Notes - 1.2.2 (2024-12-2)

## Editor
### New Features
- Element hover tooltip size now scales with camera zoom
- Added progress bar for opening remote files
- Added loading effects for model elements, icon elements, and image elements
- Support for iframe embedding

### Improvements
- Optimized 2D/3D switching logic to maintain camera ratio
- Optimized iplayer and icraft compression logic, using two-layer compression to reduce file size
- Improved display of disabled elements

### Bug Fixes
- Fixed 404 error when loading editor.json from international access
- Fixed permission expiration issue during prolonged file handle interactions

## Player
### New Features
- Added native JavaScript version player (@icraft/player)
- Custom camera switching interface now supports animation duration setting
- Added support for specifying animation scheme number
- Added method for exporting images
