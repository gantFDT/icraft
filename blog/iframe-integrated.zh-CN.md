# 如何通过iframe集成iCraft Editor 3D架构图

## 介绍
iCraft Editor 是一款3D架构图设计工具，可以轻松创建出精美的3D架构图，目前iCraft Editor 支持iframe嵌入。
可以让用户在自己的网站中嵌入iCraft Editor，方便实时沉浸式呈现、动画展示。

## 如何嵌入
iCraft Editor 支持通过传递一些路由参数来控制表现，通过传递url可以打开远程文件.

![icraft-editor](https://github.com/gantFDT/icraft/blob/main/public/images/website/iframe.jpg?raw=true)

```tsx
const style = {
  width: "100%",
  height: "500px",
  position: "relative" as const,
  overflow: "hidden" as const,
};
 
const EDITOR_BASE_URL = "https://icraft.gantcloud.com/editor";
 
export default () => {
  const params = new URLSearchParams({
    url: "https://icraft.gantcloud.com/api/static/templates/ArgoCD.icraft",
    preview: "true",
    defaultAnimationPlan: "0",
    autoPlay: "true",
    loop: "true",
  });
 
  const src = `${EDITOR_BASE_URL}?${params.toString()}`;
 
  return (
    <div style={style}>
      <iframe
        src={src}
        title='iCraft Editor'
        width='100%'
        height='100%'
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

```


## 路由参数

|         Name         |    description     |  type   | default | required |
| :------------------: | :----------------: | :-----: | :-----: | :------: |
|         url          |  .icraft 文件地址  | string  |         |  false   |
|       preview        |    是否预览模式    | boolean |  false  |  false   |
| defaultCustomCamera  | 默认自定义相机序号 | number  |         |  false   |
| defaultAnimationPlan |  默认动画方案序号  | number  |         |  false   |
|     defaultLoop      |    默认循环播放    | boolean |  false  |  false   |
|       autoPlay       |      自动播放      | boolean |  false  |  false   |
|       template       |      模板标识      | string  |         |  false   |


详细内容请参阅：https://icraft.gantcloud.com/iframe/intro
