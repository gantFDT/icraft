<!--
 * @Descripttion: 
 * @MainAuthor: 
-->
# 简介
**@icraft/player-react**
<p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img src="https://img.shields.io/npm/v/@icraft/player-react.svg" alt="npm 版本"/>
  <img src="https://img.shields.io/npm/dm/@icraft/player-react.svg" alt="npm 下载量"/>
</p>

@icraft/player-react 是一个 React 前端组件，可以让你轻松地将在 iCraft Editor 中编辑的场景集成到你的项目中，
并提供丰富的交互事件和方法。

## 快速开始

### 安装

使用 npm 或 pnpm 安装 `@icraft/player-react` 包：

```bash
# 使用 npm
npm install @icraft/player-react --save

# 或使用 pnpm
pnpm install @icraft/player-react --save
```

注意：某些包管理器可能不会自动安装 `@icraft/engine` 包。如果缺少该包，请手动安装：

```bash
pnpm install @icraft/engine --save
```

### 基础用法

在你的项目中导入并使用 `ICraftPlayer` 组件：

```jsx
import { ICraftPlayer } from "@icraft/player-react";

export default function MyScene() {
  return <ICraftPlayer src='your-scene.iplayer' />;
}
```

其中 `src` 是从 iCraft Editor 导出的 `.iplayer` 文件路径。
