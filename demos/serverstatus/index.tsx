"use client";

import { ClickParams, Element3D, ICraftPlayer, ICraftPlayerInstance } from "@icraft/player-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getData } from "./utils";
import { StatusCardProps } from "./interface";
import StatusCard from "./StatusCard";
import styles from "./index.module.css";

export default () => {
  const playerRef = useRef<ICraftPlayerInstance>(null);
  const [tipContainer, setTipContainer] = useState<HTMLDivElement | null>(null);
  const [activeService, setActiveService] = useState<string | null>("DTS");
  const [activeData, setActiveData] = useState<StatusCardProps | null>(null);
  const [fixed, setFixed] = useState<boolean>(false);
  const elementRef = useRef<Element3D | null>(null);

  const onReady = () => {
    const player = playerRef.current;
    if (!activeService) {
      return;
    }
    const element = player?.getElementsByName(activeService)?.[0];
    if (!element) return;
    elementRef.current = element;
    if (element?.tip) {
      const container = document.createElement("div");
      element.tip.updateInnerHTML(container);
      element.tip.updateVisible(true);
      setTipContainer(container);
    }
  };

  const onClick = (params: ClickParams) => {
    const { instance: element } = params;
    const player = playerRef.current;
    // clear old tip
    elementRef.current?.tip?.reset();

    // clear old fixed container
    if (fixed && tipContainer) {
      tipContainer.remove();
    }

    elementRef.current = element;
    if (!element) {
      setActiveService(null);
      setTipContainer(null);
      return;
    }
    const activeName = element.options?.name;
    setActiveService(activeName || null);

    if (fixed) {
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.top = "10px";
      container.style.right = "10px";
      container.style.zIndex = "100";
      player?.getDom().appendChild(container);
      setTipContainer(container);
    } else {
      if (element?.tip) {
        const container = document.createElement("div");
        element.tip.updateInnerHTML(container);
        element.tip.updateVisible(true);
        setTipContainer(container);
      }
    }
  };

  useEffect(() => {
    if (!activeService) return;
    const interval = setInterval(() => {
      setActiveData(getData(activeService));
    }, 100);
    return () => clearInterval(interval);
  }, [activeService]);

  return (
    <div className={styles.container}>
      <ICraftPlayer
        src='/templates/ControlPlatform.iplayer'
        ref={playerRef}
        onReady={onReady}
        onClick={onClick}
        addons={["ZoomBar"]}
      />
      <div className={styles.checkbox}>
        <label className={styles.switch}>
          <input
            type='checkbox'
            checked={fixed}
            onChange={(e) => setFixed(e.target.checked)}
          />
          <span className={styles.slider}></span>
        </label>
        <span>fixed</span>
      </div>
      {tipContainer &&
        activeData &&
        createPortal(
          <StatusCard
            serviceName={activeData.serviceName}
            status={activeData.status}
            metrics={activeData.metrics}
          />,
          tipContainer
        )}
    </div>
  );
};
