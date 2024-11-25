"use client";

import { ICraftPlayer, ICraftPlayerInstance } from "@icraft/player-react";
import { useRef, useState } from "react";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const ButtonStyle = {
  position: "absolute" as const,
  bottom: "10px",
  right: "10px",
  zIndex: 1000,
  backgroundColor: "white",
  color: "black",
  border: "1px solid #ccc",
  borderRadius: "6px",
  padding: "4px 8px",
};

export default () => {
  const [autoRotate, setAutoRotate] = useState(false);

  const instanceRef = useRef<ICraftPlayerInstance | null>(null);

  const handleToggleAutoRotate = () => {
    const value = !autoRotate;
    instanceRef.current?.toogleAutoRotate(value);
    setAutoRotate(value);
  };

  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/NetworkArchitectureSpecial.iplayer'
        ref={instanceRef}
        addons={
          <>
            <button
              style={{
                ...ButtonStyle,
                backgroundColor: autoRotate ? "black" : "white",
                color: autoRotate ? "white" : "black",
              }}
              onClick={handleToggleAutoRotate}
            >
              toogleAutoRotate
            </button>
          </>
        }
      />
    </div>
  );
};
