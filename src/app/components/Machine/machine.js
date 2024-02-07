"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./machine.module.scss";

export default function Machine() {
  const movingBarRef = useRef(null);
  const indicatorRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const levels = [{ width: 100 }, { width: 60 }, { width: 40 }];

  // console.log("currentLevel", currentLevel);
  // console.log("levels", levels[currentLevel].width);

  const handleStop = () => {
    console.log("stop");

    const movingBar = movingBarRef.current.getBoundingClientRect();
    const indicator = indicatorRef.current.getBoundingClientRect();
    if (movingBar.left < indicator.right && movingBar.right > indicator.left) {
      console.log("collision");
      setIsAnimating(false);
      // if (currentLevel === levels.length - 1) {
      //   console.log("end");
      // } else {
      //   setCurrentLevel + 1;
      // }
      // if (currentLevel < levels.length - 1) {
      //   setCurrentLevel(currentLevel + 1);
      // } else {
      //   console.log("end");
      // }
    }
  };

  const handleRestart = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
    } else {
      console.log("end");
    }
    setIsAnimating(true);
  };

  const movingLeft = () => {
    gsap.to(movingBarRef.current, {
      left: `calc(100% - ${levels[currentLevel].width}px)`,
      duration: 2,
      ease: "none",
      onComplete: () => {
        movingRight();
      },
    });
  };

  const movingRight = () => {
    gsap.to(movingBarRef.current, {
      left: "0%",
      duration: 2,
      ease: "none",
      onComplete: () => {
        movingLeft();
      },
    });
  };

  useEffect(() => {
    if (isAnimating) {
      movingRight();
    } else {
      gsap.killTweensOf(movingBarRef.current); // Cela arrêtera l'animation en cours
    }
  }, [isAnimating, currentLevel]);

  return (
    <div className={styles.gameTiming}>
      <div className={styles.consignes}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          dolor. Eum, et? Necessitatibus recusandae, ipsam praesentium maiores
          tenetur impedit, omnis molestias, nam dicta sapiente quas.
        </p>
      </div>
      <div className={styles.game}>
        <div className={styles.mainBar}>
          <div
            className={styles.movingBar}
            ref={movingBarRef}
            style={{
              width: levels[currentLevel].width + "px",
            }}
          ></div>
          <div ref={indicatorRef} className={styles.indicator}></div>
        </div>
      </div>

      <div className={styles.stop}>
        <button onClick={() => handleStop()}>STOP</button>
        <button onClick={() => handleRestart()}>RESTART</button>
      </div>
    </div>
  );
}
