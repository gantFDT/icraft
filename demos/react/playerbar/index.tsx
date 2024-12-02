"use client";

import { ICraftPlayer } from "@icraft/player-react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

export default () => {
  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/ArgoCD.iplayer'
        addons={["PlayerBar"]}
      />
    </div>
  );
};
