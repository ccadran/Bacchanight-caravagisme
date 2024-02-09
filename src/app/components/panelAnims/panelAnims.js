import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function PanelAnims() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="/anims/MOTION_PANEL.json"
        style={{ height: "30svh", width: "100%" }}
      >
        <Controls visible={false} />
      </Player>
    </div>
  );
}
