"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import LayoutNav from "../../../../components/LayoutNav/layoutNav";
import styles from "./light.module.scss";
import gsap from "gsap";
export default function page() {
  const crossRef = useRef(null);
  const [showCross, setShowCross] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = (state) => {
    console.log("light");
    setShowAnswer(false);
    if (state) {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  };
  const handleValidationClick = () => {
    console.log("validation");
    if (isLight) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowAnswer(true);
  };

  const handleGlobalClick = (e) => {
    setShowCross(true);
    console.log(e);
    gsap.to(crossRef.current, {
      left: e.clientX,
      top: e.clientY,
      opacity: 1,
      duration: 0.3,
    });
  };
  return (
    <LayoutNav>
      <div className={styles.consignes}>
        <div className={styles.avatarContainer}>
          <img src="/images/avatar.png" alt="" />
        </div>
        <p>
          A l’aide de ton doigt place la source de lumière en cliquant sur
          l’image.
        </p>
      </div>
      <div
        className={styles.imageContainer}
        style={{
          background: isCorrect
            ? `url("/images/ColorPicker/red.png") center/cover`
            : `url("/images/ColorPicker/green.png") center/cover`,
        }}
        onClick={(e) => handleGlobalClick(e)}
      >
        <div className={styles.case} onClick={() => handleClick(false)}></div>
        <div className={styles.case} onClick={() => handleClick(true)}></div>
        <div className={styles.case} onClick={() => handleClick(false)}></div>
        <div className={styles.case} onClick={() => handleClick(false)}></div>
        <div className={styles.case} onClick={() => handleClick(false)}></div>
        <div className={styles.case} onClick={() => handleClick(false)}></div>

        <div className={styles.cross} ref={crossRef}>
          <img src="/icons/cross.svg" alt="" />
        </div>
      </div>
      <div className={`${styles.answer} ${showAnswer ? styles.visible : ""}`}>
        {showAnswer &&
          (isCorrect ? (
            <div className={styles.answerContent}>
              <h4>Scientifique</h4>
              <p>Et la lumière fut, ça a marché!</p>
            </div>
          ) : (
            <div className={styles.answerContent}>
              <h4>Scientifique</h4>
              <p>
                La machine ne valide pas, mets-y du tien c’est très important!
              </p>
            </div>
          ))}
      </div>
      <div className={styles.validation}>
        {isCorrect ? (
          <Link href="/experience/sebastien/transiSwitch">
            <p>Suivant</p>
          </Link>
        ) : (
          <button onClick={() => handleValidationClick()}>Valider</button>
        )}
      </div>
    </LayoutNav>
  );
}
