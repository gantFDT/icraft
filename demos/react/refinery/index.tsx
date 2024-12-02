"use client";

import { AnimationType, ICraftPlayer, ICraftPlayerInstance } from "@icraft/player-react";
import { useEffect, useRef } from "react";
import { getData } from "./utils";
import { INITIAL_METRICS, LINE_NAMES, RefineryMetricKey } from "./types";

const METRIC_NAMES = Object.keys(INITIAL_METRICS) as RefineryMetricKey[];

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

export default () => {
  const playerRef = useRef<ICraftPlayerInstance>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const updateData = async () => {
    const player = playerRef.current;
    if (!player) return;
    const data = await getData();
    METRIC_NAMES.forEach((name) => {
      const element = player.getElementsByName(name)?.[0];
      if (element && element.typeName === "text") {
        element.updateAttribute({
          type: "text",
          value: data[name].toString(),
        });
      }
    });
  };

  useEffect(() => {
    updateData();
    timerRef.current = setInterval(updateData, 100);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const onReady = (instance: ICraftPlayerInstance) => {
    const player = instance;
    LINE_NAMES.forEach((name) => {
      const element = player.getElementsByName(name)?.[0];
      if (element && element.typeName === "line") {
        player.playAnimationByElementKey(element.key, {
          animationType: AnimationType.LoopFlow,
          flowLineColor: "#ffff00",
          flowLineSize: 0.04,
        });
      }
    });
  };

  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/RefineryStatistics.iplayer'
        ref={playerRef}
        defaultCustomCamera={4}
        onReady={onReady}
      />
    </div>
  );
};
