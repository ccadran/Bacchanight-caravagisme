import { Player, Controls } from "@lottiefiles/react-lottie-player";
import styles from "./voice.module.scss";

export default function AudioAnims() {
  return (
    <div className={styles.voiceAnim}>
      <Player
        autoplay
        loop
        src="/anims/PANEL_VOICE.json"
        style={{ height: "130px", width: "100%" }}
      >
        <Controls visible={false} />
      </Player>
    </div>
  );
}
