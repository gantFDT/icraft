<!--
 * @Descripttion: 
 * @MainAuthor: 
-->
# Introduction
**@icraft/player-react**
<p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img src="https://img.shields.io/npm/v/@icraft/player-react.svg" alt="npm version"/>
  <img src="https://img.shields.io/npm/dm/@icraft/player-react.svg" alt="npm downloads"/>
</p>

@icraft/player-react is a React frontend component that allows you to easily integrate scenes edited in iCraft Editor into your project,
and provides rich interaction events and methods.

## Quick Start

### Installation

Install the `@icraft/player-react` package using npm or pnpm:

```bash
# Using npm
npm install @icraft/player-react --save

# Or using pnpm
pnpm install @icraft/player-react --save
```

Note: Some package managers may not automatically install the `@icraft/engine` package. If it's missing, please install it manually:

```bash
pnpm install @icraft/engine --save
```

### Basic Usage

Import and use the `ICraftPlayer` component in your project:

```jsx
import { ICraftPlayer } from "@icraft/player-react";

export default function MyScene() {
  return <ICraftPlayer src='your-scene.iplayer' />;
}
```

Where `src` is the path to the `.iplayer` file exported from iCraft Editor.
