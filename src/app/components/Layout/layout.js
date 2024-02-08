"use client";

import { useState } from "react";
import styles from "./layout.module.scss";

import PanelAnims from "../panelAnims/panelAnims";
import AudioAnim from "../panelAnims/audioAnim";

export default function RootLayout({ children }) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    console.log("test");
    setIsMuted(!isMuted);
    if (isMuted) {
      // Activer le son
      document.querySelectorAll("audio").forEach((audio) => {
        audio.volume = 1;
      });
    } else {
      // Couper le son
      document.querySelectorAll("audio").forEach((audio) => {
        audio.volume = 0;
      });
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.infosContainer}>
        <div className={styles.navContainer}>
          <h4>SIGNAL FAIBLE</h4>
          <div className={styles.controller}>
            <div className={styles.imgContainer}>
              <img src="/icons/battery.svg" alt="" />
            </div>
            <div
              className={`${styles.volume} ${styles.imgContainer}`}
              onClick={() => toggleMute()}
            >
              <img
                src={isMuted ? "/icons/sound-off.svg" : "/icons/sound-on.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.traveler}>
          <div className={styles.scientifique}>
            <div className={styles.imgContainer}>
              <img src="/images/avatar.png" alt="" />
            </div>
            <div className={styles.travelerVoice}>
              <h4>Scientifique</h4>
              <div className={styles.imgContainer2}>
                <AudioAnim />
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <PanelAnims />
          </div>
        </div>
      </div>

      {children}
    </main>
  );
}
