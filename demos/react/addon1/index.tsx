"use client";

import {
  CameraBar,
  ICraftPlayer,
  PlayerBar,
  ZoomBar
} from "@icraft/player-react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const CameraBarStyle = {
  left: "50%",
  transform: "translateX(-50%)",
  top: "10px",
  bottom: "initial",
};

const ZoomBarStyle = {
  right: "10px",
  top: "10px",
  bottom: "initial",
};

const PlayerBarStyle = {
  left: "10px",
  transform: "translateX(0)",
  width: "calc(100% - 20px)",
};

export default () => {
  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/NetworkArchitectureSpecial.iplayer'
        addons={
          <>
            <CameraBar style={CameraBarStyle} />
            <ZoomBar style={ZoomBarStyle} />
            <PlayerBar style={PlayerBarStyle} />
          </>
        }
      />
    </div>
  );
};
