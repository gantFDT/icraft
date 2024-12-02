# 介绍

**@icraft/player**
<p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img src="https://img.shields.io/npm/v/@icraft/player.svg" alt="npm version"/>
  <img src="https://img.shields.io/npm/dm/@icraft/player.svg" alt="npm downloads"/>
</p>

@icraft/player 是一个 原生 JavaScript 组件，可以轻松地将 iCraft Editor 编辑的场景集成到您的项目中，
并提供丰富的交互事件和方法。

## 快速开始

### 安装

#### npm
使用 npm 或 pnpm 安装 `@icraft/player` 包：

```bash
# 使用 npm
npm install @icraft/player --save

# 或使用 pnpm
pnpm install @icraft/player --save
```

提示：某些包管理工具可能不会自动安装 `@icraft/engine` 包, 如报缺失，请手动安装：

#### CDN

```html
<script src="https://unpkg.com/@icraft/player@latest/dist/umd/icraft-player.min.js"></script>
```

### 基础使用

#### ESM
```js
import ICraftPlayer from '@icraft/player'
```

#### CDN
```js
const ICraftPlayer = window.ICraftPlayer
```

创建播放器实例：

```js
const player = new ICraftPlayer({
  src: 'your-scene.iplayer',
  container: document.getElementById('container'),
});
```

其中 `src` 是 iCraft Editor 导出的 `.iplayer` 文件地址,
`container` 是承载场景的 DOM 元素。
