# Release Notes - 1.2.1 (2024-11-22)

## New Features

### Extended 3D Model Library
- Added Generic 3D Models
- Added AWS 3D Models
- Added Business Process 3D Models
- Added Server 3D Models
- Added Storage 3D Models
- Added Security 3D Models
- Added Network 3D Models
- Added Basic Hardware 3D Models
- Added Cloud Computing 3D Models

### Enhanced Interaction Features
- Added multi-select and move functionality for elements with connecting lines
- Added batch selection of elements with selection box
- Added inverse element selection feature
- Added multiple connections between lines and objects
- Added PWA (Progressive Web App) support
- Added remote file opening via URL parameters and route configuration
- Added progress bar for remote file loading
- Added loading effects for model elements, icons, and images

## Improvements

### Performance Optimization
- Optimized editor bundle size for improved initial loading time
- Enhanced performance for canvas panning, view rotation, and object dragging
- Improved rendering stability, resolving occasional element flickering issues

### Interaction Improvements
- Enhanced rotation functionality with multi-axis rotation support
- Improved element connection logic using element bounding box intersection points
- Enhanced text snapping logic
- Optimized element rotation with automatic height and center point adjustment
- Improved connection line logic with automatic recalculation when element size or rotation changes

## Bug Fixes
- Fixed display state anomalies when dragging the progress bar for animation nodes with fade effects
- Fixed prism-type bounding box alignment issues
- Resolved magnetic snapping issues when dragging elements on surfaces with excessive thickness

