"use client";

import {
  AnimationType,
  ICraftPlayer,
  ICraftPlayerInstance
} from "@icraft/player-react";
import React, { useRef } from "react";
import { getEcommerceData } from "./utils";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const getCard = (value: string) => {
  const card = document.createElement("div");
  card.innerHTML = value;
  card.style.cssText = `
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #333;
    max-width: 280px;
    line-height: 1.5;
    word-break: break-all;
  `;
  return card;
};

export default () => {
  const playerRef = useRef<ICraftPlayerInstance>(null);
  const timerRef = useRef<NodeJS.Timeout>();
  const currentIndexRef = useRef(0);

  const receiveData = async () => {
    const player = playerRef.current;
    if (!player) return;
    const data = await getEcommerceData();

    const { key, value } = data[currentIndexRef.current];
    const line = player.getElementsByName(key)?.[0];

    const card = getCard(value);
    if (line) {
      player.playAnimationByElementKey(line.key, {
        animationType: AnimationType.Flow,
        animationDuration: 3,
        tipContent: card,
        animationShowTip: true,
        flowLineColor: "#1a73e8",
      });
    }
   
    currentIndexRef.current = (currentIndexRef.current + 1) % data.length;
    player.changeCustomCamera(currentIndexRef.current,3000);
  };

  React.useEffect(() => {
    timerRef.current = setInterval(receiveData, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/E-commerce-mobile.iplayer'
        ref={playerRef}
      />
    </div>
  );
};
