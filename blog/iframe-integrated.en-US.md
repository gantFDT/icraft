# How to Integrate iCraft Editor 3D Architecture Diagram via iframe

## Introduction
iCraft Editor is a 3D architecture diagram design tool that allows you to easily create beautiful 3D architecture diagrams. Currently, iCraft Editor supports iframe embedding.
This enables users to embed iCraft Editor into their own websites, facilitating real-time immersive presentation and animation display.

## How to Embed
iCraft Editor supports controlling its behavior through route parameters, and you can open remote files by passing URLs.

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

## Route Parameters

|         Name         |         Description          |  Type   | Default | Required |
| :------------------: | :--------------------------: | :-----: | :-----: | :------: |
|         url          |    .icraft file address     | string  |         |  false   |
|       preview        |      Is preview mode        | boolean |  false  |  false   |
| defaultCustomCamera  | Default custom camera index | number  |         |  false   |
| defaultAnimationPlan | Default animation plan index| number  |         |  false   |
|     defaultLoop      |     Default loop playback   | boolean |  false  |  false   |
|       autoPlay       |        Auto playback        | boolean |  false  |  false   |
|       template       |     Template identifier     | string  |         |  false   |

For detailed information, please refer to: https://icraft.gantcloud.com/iframe/intro
