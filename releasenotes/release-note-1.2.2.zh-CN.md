# 发布说明 - 1.2.2 (2024-12-2)

![iCraft Editor](https://raw.githubusercontent.com/gantFDT/icraft/main/public/images/banner.jpg)

## Editor
### 新增功能
- 元素悬浮提示框大小支持相机缩放联动
- 新增打开远程文件的进度条显示
- 新增模型元素、图标元素、图片元素的loading效果
- 支持iframe嵌入

### 功能优化
- 优化2D/3D切换逻辑，保持相机比例
- 优化iplayer以及icraft压缩逻辑, 使用两层压缩减小文件体积
- 优化元素disabled显示

### Bug修复
- 修复国外访问会异常加载editor.json 404的问题
- 修正文件句柄交互时间过长时权限过期的问题

## Player
### 新增功能
- 新增原生javascript版本player (@icraft/player)
- 切换自定义相机接口支持动画时长设置
- 新增支持指定动画方案序号
- 新增导出图片的方法
