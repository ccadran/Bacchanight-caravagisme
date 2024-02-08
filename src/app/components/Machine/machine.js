"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./machine.module.scss";
import { useRouter } from "next/navigation";
import Button from "../Button/button";

export default function Machine({ link }) {
  const movingBarRef = useRef(null);
  const indicatorRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isCollide, setIsCollide] = useState(false);
  const [readyForNextStep, setReadyForNextStep] = useState(false);

  const router = useRouter();

  const levels = [{ width: 100 }, { width: 60 }, { width: 40 }];

  const handleStop = () => {
    const movingBar = movingBarRef.current.getBoundingClientRect();
    const indicator = indicatorRef.current.getBoundingClientRect();
    if (movingBar.left < indicator.right && movingBar.right > indicator.left) {
      setIsCollide(true);
      setIsAnimating(false);
      // if (!currentLevel === levels.length - 1) {
      if (currentLevel < levels.length - 1) {
        setTimeout(() => {
          handleRestart();
        }, 1000);
      }
      // }
      if (currentLevel === levels.length - 1) {
        setReadyForNextStep(true); // Indique que vous êtes prêt à passer à l'étape suivante
      }
    }
  };

  const handleRestart = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setIsCollide(false);
      setIsAnimating(true);
      setBarOnPlace();
    } else {
      console.log("end");
      console.log("test link", link);
      router.push(link);
    }
  };

  const movingLeft = () => {
    gsap.to(movingBarRef.current, {
      left: "0%",
      duration: 1,
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
      duration: 1,
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
    if (currentLevel < levels.length) {
      if (isAnimating) {
        handleStop();
      } else {
        handleRestart();
      }
    }
    if (!currentLevel < levels.length - 1) {
      // router.push(link);
    }
  };

  return (
    <div className={styles.gameTiming}>
      <div className={styles.consignes}>
        <div className={styles.avatarContainer}>
          <img src="/images/avatar.png" alt="" />
        </div>
        <p>
          Appuie lorsque les curseurs se trouvent dans la zone verte pour lancer
          la machine.
        </p>
      </div>
      <div className={styles.answer}>
        {currentLevel === 0 ? (
          <div className={styles.step}>
            <p>ÉTAPE 1</p>
          </div>
        ) : currentLevel === 1 ? (
          <div className={styles.step}>
            <p>ÉTAPE 2</p>
          </div>
        ) : (
          <div className={styles.step}>
            <p>ÉTAPE 3</p>
          </div>
        )}
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
          <div className={styles.triangle}>
            <img src="/icons/triangle.png" alt="" />
          </div>
          <div className={` ${styles.triangleDown}`}>
            <img src="/icons/triangle.png" alt="" />
          </div>
        </div>
      </div>
      {readyForNextStep && (
        <div className={styles.finish}>
          <p>
            Bravo tu as finis toutes les étapes tu peux maintenant lancer la
            machine !
          </p>
          <Button link={link} text="Lancer la machine" />
        </div>
      )}
    </div>
  );
}
