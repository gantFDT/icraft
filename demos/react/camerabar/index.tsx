"use client";

import { ICraftPlayer, CameraBar } from "@icraft/player-react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const CameraBarStyle = {
  left: "initial",
  transform: "translateX(0%)",
  bottom: "10px",
  right:'10px'
};

export default () => {
  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/AWSCloud.iplayer'
        // addons={["CameraBar"]}
        addons={<><CameraBar style={CameraBarStyle} /></>}
      />
    </div>
  );
};
