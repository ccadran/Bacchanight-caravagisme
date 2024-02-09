"use client";

import Link from "next/link";
import React, { useState } from "react";
import LayoutNav from "../../../../components/LayoutNav/layoutNav";
import Data from "../../../../../data/painting.json";
import styles from "./colorPicker.module.scss";

export default function ColorPicker() {
  const data = Data.madeleine;

  const [currentColor, setCurrentColor] = useState(data[3]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleColorClick = (color) => {
    setCurrentColor(color);
    setShowAnswer(false);
  };

  const handleValidationClick = (color) => {
    setShowAnswer(true);
    if (color.isCorrect) {
      setIsCorrect(true);
    }
  };

  return (
    <LayoutNav>
      {/* <div className={styles.colorPicker}> */}

      <div className={styles.consignes}>
        <div className={styles.avatarContainer}>
          <img src="/images/avatar.png" alt="" />
        </div>
        <p>Retrouve la couleur du drap en cliquant sur la bonne couleur</p>
      </div>
      <div className={styles.paintingContainer}>
        <img src={currentColor.img} alt="" />
      </div>
      <div className={styles.choices}>
        {data.map((color, index) => (
          <div
            onClick={() => handleColorClick(color)}
            className={`${styles.choice} ${
              currentColor === color ? styles.active : ""
            }`}
            key={index}
          >
            <div
              className={styles.color}
              style={{ backgroundColor: color.color }}
            ></div>
          </div>
        ))}
      </div>
      <div className={`${styles.answer} ${showAnswer ? styles.visible : ""}`}>
        {showAnswer &&
          (isCorrect ? (
            <div className={styles.answerContent}>
              <h4>Scientifique</h4>
              <p>Bravo! Quel œil !</p>
            </div>
          ) : (
            <div className={styles.answerContent}>
              <h4>Scientifique</h4>
              <p>Ce n’est pas la bonne teinte, il faut être minutieux </p>
            </div>
          ))}
      </div>
      <div className={styles.validation}>
        {isCorrect ? (
          <Link href="/experience/outro">
            <p>Suivant</p>
          </Link>
        ) : (
          <button onClick={() => handleValidationClick(currentColor)}>
            Valider
          </button>
        )}
      </div>
    </LayoutNav>
  );
}
