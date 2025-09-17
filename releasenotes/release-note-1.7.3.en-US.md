# Release Notes - 1.7.3 (2025-9-17)

![iCraft Editor](https://raw.githubusercontent.com/gantFDT/icraft/main/public/images/banner.jpg)

## Editor
### New Features
- **GLB Model Optimization**: Support for mesh merging, hierarchy optimization, and automatic polygon reduction, significantly improving model performance
- **Element Filtering**: Added type-based filtering and search functionality for quick target element location
- **Enhanced Batch Operations**: Support for batch selection by specified type and batch modification of identical object properties
- **Precise Position Adjustment**: Added keyboard arrow key fine-tuning for object positioning, enabling more precise micro-adjustments
- **Multi-Select Transform**: Support for multi-selected object elements to perform grouped transformations (translation, rotation, scaling)

### Improvements
- **AI Rendering Upgrade**: Upgraded AI rendering model to the more powerful seedream4.0, providing higher quality rendering effects
- **Smart Model Import**: Automatic structure hierarchy detection and model optimization when importing models in the editor, assisting in performance enhancement

### Bug Fixes
- Fixed issue where arrow pipeline animations would still display after entering subscenes
- Fixed abnormal tip show/hide logic during animations
- Fixed Player event click failures in certain scenarios
- Fixed font resource access issues in certain regions
- Fixed issue where subscene names were not synchronized after element renaming

## Player
### New Features
- Synchronized support for Editor-related functionality, ensuring consistency between editor and player features
