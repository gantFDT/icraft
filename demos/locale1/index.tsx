"use client";

import { ICraftPlayer, LocaleInterface } from "@icraft/player-react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const locale: Record<string, LocaleInterface> = {
  en_US: {
    cameraBar: {
      speed: "Speed",
      orthographicCamera: "Orthographic Camera",
      perspectiveCamera: "Perspective Camera",
      autoRotate: "Auto Rotate",
    },
    playerBar: {
      replay: "Replay",
      pause: "Pause",
      play: "Play",
      prev: "Previous",
      next: "Next",
      loop: "Loop",
      reset: "Reset",
    },
    enterSubScene: "Enter Sub-scene",
    exitSubScene: "Exit Sub-scene",
    zoomBar: {
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      resetCamera: "Reset Camera",
    },
  },
};

export default () => {
  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/NetworkArchitectureSpecial.iplayer'
        addons={["CameraBar", "EnterSubScene", "ExitSubScene", "ZoomBar"]}
        locale={locale}
      />
    </div>
  );
};
