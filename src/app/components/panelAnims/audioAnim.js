import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function AudioAnims() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="/anims/PANEL_VOICE.json"
        style={{ height: "50px", width: "225px" }}
      >
        <Controls visible={false} />
      </Player>
    </div>
  );
}
