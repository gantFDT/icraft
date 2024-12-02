"use client";

import React, { useState } from "react";
import { ClickParams, ICraftPlayer } from "@icraft/player-react";

export default () => {
  const [clicked, setClicked] = useState<string>();

  const onClick = (e: ClickParams) => {
    console.log(e);
    const { instance: element } = e;
    setClicked(element?.options?.name || "");
  };

  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/AWSCloud.iplayer'
        onClick={onClick}
      />
      <div style={textStyle}>Clicked: {clicked}</div>
    </div>
  );
};

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const textStyle = {
  position: "absolute" as const,
  bottom: 10,
  right: 10,
};