# iCraft Editor 3D Architecture Software Officially Releases @icraft/player-react Frontend Component for Easy Integration of 3D Architecture Diagrams into Your Projects

## Introduction

@icraft/player-react is a newly launched React component library by iCraft Editor, specifically designed to simplify frontend integration of 3D digital twin scenarios. Through this component, developers can easily embed 3D scenes created in iCraft Editor into their React projects, gaining rich interactive capabilities and real-time data integration features.

## Features

- 🚀 **Ready to Use** - Zero configuration integration, just a few lines of code to get started
- 🎨 **Custom Plugin Sets** - Support for optional features through a flexible plugin mechanism
- 🔌 **Practical Events and Methods** - Provides rich events and methods for easy integration with your project
- 🎬 **Animation Control** - Support for autoplay, loop playback, and other animation controls
- 🔌 **Real-time Data Integration** - Support for real-time data integration to achieve digital twins

## Installation

```bash
pnpm install @icraft/player-react --save
```

## Usage

Just a few lines of code to integrate 3D scenes into your React project:

```tsx
import { ICraftPlayer } from "@icraft/player-react";
 
export default function MyScene() {
  return <ICraftPlayer src='your-scene.iplayer' />;
}
```

> **Important Note**: The `.iplayer` file needs to be exported from iCraft Editor. This is an optimized 3D scene file format that contains complete scene information. You can obtain this file through the "Export" function after editing your scene in iCraft Editor.

## Examples

### Service Status Monitoring
Demonstrates how to visualize real-time server cluster operational status data in 3D scenes, including key metrics like CPU usage, memory consumption, uptime, and more.
![Server Status Monitoring](https://raw.githubusercontent.com/gantFDT/icraft/refs/heads/main/public/images/website/server.webp)
  
[View Details](https://icraft.gantcloud.com/player-react/example/serverstatus)

### Global E-commerce Real-time Data
Shows how to map real-time transaction data, user traffic, order status, and other information from an e-commerce platform into 3D scenes for business data visualization monitoring.
![Global E-commerce Real-time Data](https://raw.githubusercontent.com/gantFDT/icraft/refs/heads/main/public/images/website/E-commerce.webp)
  
[View Details](https://icraft.gantcloud.com/player-react/example/ecommerce)

### Refinery Real-time Production Data
Demonstrates how to display real-time equipment operational status and production data from industrial environments in 3D scenes to achieve industrial digital twins.
![Refinery Real-time Production Data](https://raw.githubusercontent.com/gantFDT/icraft/refs/heads/main/public/images/website/Refining.webp)

[View Details](https://icraft.gantcloud.com/player-react/example/refinery)

## Summary
@icraft/player-react provides developers with a one-stop 3D digital twin visualization solution. Through simple configuration, you can quickly build professional 3D visualization applications. Combined with flexible APIs and real-time data integration capabilities, it enables rapid implementation of your digital twin projects. Whether for monitoring dashboards, operational analysis, or industrial internet applications, @icraft/player-react can help you achieve your goals effortlessly.

Whether you need to create system architecture diagrams, software architecture diagrams, cloud architecture diagrams, IT infrastructure diagrams, deployment architecture diagrams, or 3D structural diagrams, network architecture diagrams, and network topology diagrams, iCraft Editor can be used to draw them all and implement digital twins.

Start using @icraft/player-react now and explore the unlimited possibilities of digital twins!

https://icraft.gantcloud.com/player-react/intro
