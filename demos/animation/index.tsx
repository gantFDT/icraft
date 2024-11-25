"use client";

import {
  AnimationType,
  ClickParams,
  ICraftPlayer,
  ICraftPlayerInstance,
} from "@icraft/player-react";
import React from "react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

export default () => {
  const playerRef = React.useRef<ICraftPlayerInstance>();

  const onClick = (e: ClickParams) => {
    const player = playerRef.current;
    const { instance: Element } = e;
    if (!Element) {
      player?.cancelAnimation();
      return;
    }
    if (Element.typeName !== "line") {
      player?.playAnimationByElementKey(Element.key, {
        animationDuration: 3,
        animationType: AnimationType.HeartBeat,
        animationShowTip: true,
      });
    } else {
      player?.playAnimationByElementKey(Element.key, {
        animationDuration: 3,
        animationType: AnimationType.LoopFlow,
      });
    }
  };

  const onReady = (player: ICraftPlayerInstance) => {
    const user = player.getElementsByName("User")?.[0];
    if (user) {
      player.playAnimationByElementKey(user.key, {
        animationDuration: 100,
        animationType: AnimationType.Rotate,
      });
    }
  };

  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/AWSCloud.iplayer'
        onClick={onClick}
        onReady={onReady}
        ref={playerRef}
      />
    </div>
  );
};
