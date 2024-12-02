"use client";

import { ICraftPlayer, ICraftPlayerInstance } from "@icraft/player-react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import UserCard from "./UserCard";

const USER_ELEMENT_NAME = "User";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

export default () => {
  const playerRef = useRef<ICraftPlayerInstance>(null);
  const [tipContainer, setTipContainer] = useState<HTMLDivElement | null>(null);

  const onReady = () => {
    const player = playerRef.current;
    const user = player?.getElementsByName(USER_ELEMENT_NAME)?.[0];
    if (user?.tip) {
      const container = document.createElement("div");
      user.tip.updateInnerHTML(container);
      user.tip.updateVisible(true);
      setTipContainer(container);
    }
  }

  return (
    <div style={style}>
      <ICraftPlayer
        src="/templates/CacheCluster.iplayer"
        ref={playerRef}
        onReady={onReady}
      />
      {tipContainer &&
        createPortal(
          <UserCard name="John Doe" title="Operations Engineer" />,
          tipContainer
        )}
    </div>
  );
};