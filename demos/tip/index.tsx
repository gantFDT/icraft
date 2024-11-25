"use client";

import { ICraftPlayer, ICraftPlayerInstance } from "@icraft/player-react";
import { useRef } from "react";

const USER_ELEMENT_NAME = "User";

export default () => {
  const playerRef = useRef<ICraftPlayerInstance>(null);

  const onReady = () => {
    const player = playerRef.current;
    const user = player?.getElementsByName(USER_ELEMENT_NAME)?.[0];

    const card = document.createElement("div");
    card.innerHTML = getUserCard("John Doe", "Operations Engineer");
    const cardStyle = getUserCardStyle();
    card.appendChild(cardStyle);

    user?.tip?.updateInnerHTML(card);
    user?.tip?.updateVisible(true);
  };

  return (
    <div style={style}>
      <ICraftPlayer
        src='/templates/CacheCluster.iplayer'
        onReady={onReady}
        ref={playerRef}
      />
    </div>
  );
};
const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const getUserCard = (name: string, title: string)=>{
return `
<div class="mini-profile">
  <div class="avatar">
    <img src="/images/avatar.jpg" alt="头像"/>
    <span class="status"></span>
  </div>
  <div class="info">
    <h3>${name}</h3>
    <p>${title}</p>
  </div>
</div>`
}

const getUserCardStyle = ()=>{
  const style = document.createElement('style');
  style.textContent = `
.mini-profile {
  width: 240px;
  padding: 12px;
  position: relative;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.mini-profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  z-index: -1;
}
.avatar {
  position: relative;
  flex-shrink: 0;
  z-index: 1;
}

.avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border: 2px solid #fff;
  border-radius: 50%;
}

.info {
  position: relative;
  flex: 1;
  min-width: 0;
  z-index: 1;
}

.info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
}

.info p {
  margin: 2px 0 0;
  font-size: 13px;
  color: #666;
  line-height: 1.3;
}
`
return style
}
