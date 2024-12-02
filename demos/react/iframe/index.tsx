"use client";

const style = {
  width: "100%",
  height: "100%",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const EDITOR_BASE_URL = "https://icraft.gantcloud.com/editor";

export default () => {
  const params = new URLSearchParams({
    url: "https://icraft.gantcloud.com/api/static/templates/ArgoCD.icraft",
    preview: "true",
    defaultAnimationPlan: "0",
    autoPlay: "true",
    loop: "true",
  });

  const src = `${EDITOR_BASE_URL}?${params.toString()}`;

  return (
    <div style={style}>
      <iframe
        src={src}
        title='iCraft Editor'
        width='100%'
        height='100%'
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};
