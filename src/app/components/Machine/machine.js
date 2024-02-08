"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./machine.module.scss";

export default function Machine() {
  const movingBarRef = useRef(null);
  const indicatorRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isCollide, setIsCollide] = useState(false);
  const [nextMove, setNextMove] = useState("stop");

  const levels = [{ width: 100 }, { width: 60 }, { width: 40 }];

  const handleStop = () => {
    const movingBar = movingBarRef.current.getBoundingClientRect();
    const indicator = indicatorRef.current.getBoundingClientRect();
    if (movingBar.left < indicator.right && movingBar.right > indicator.left) {
      setIsCollide(true);
      setIsAnimating(false);
      setNextMove("restart");
    }
  };

  const handleRestart = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setIsCollide(false);
      setIsAnimating(true);
      setBarOnPlace();
      setNextMove("stop");
    } else {
      console.log("end");
    }
  };

  const movingLeft = () => {
    gsap.to(movingBarRef.current, {
      left: "0%",
      duration: 2,
      ease: "none",
      onComplete: () => {
        movingRight();
      },
    });
  };

  const setBarOnPlace = () => {
    gsap.set(movingBarRef.current, {
      left: `5%`,
    });
  };

  const movingRight = () => {
    gsap.to(movingBarRef.current, {
      left: `calc(100% - ${levels[currentLevel].width}px)`,
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
      gsap.killTweensOf(movingBarRef.current); // Arrête l'animation en cours
    }
  }, [isAnimating, currentLevel]);

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isAnimating]);

  const handleClick = () => {
    if (isAnimating) {
      handleStop();
    } else {
      handleRestart();
    }
  };

  return (
    <div className={styles.gameTiming}>
      <div className={styles.consignes}>
        <p></p>
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

      {isCollide && (
        <div className="answer">
          {currentLevel === 0
            ? "Bravo tu as réussi l'étape 1 passe à l'étape 2 en cliquant sur l'écran "
            : currentLevel === 1
            ? "Bravo tu as réussi l'étape 2 passe à l'étape 3 en cliquant sur l'écran "
            : "Bravo tu as réussi l'étape 3 passe à la suite en cliquant sur l'écran "}
        </div>
      )}

      <div className={styles.stop}>
        <button onClick={() => handleStop()}>STOP</button>
        <button onClick={() => handleRestart()}>RESTART</button>
      </div>
    </div>
  );
}
