"use client";

import Link from "next/link";
import React, { useState } from "react";
import LayoutNav from "../../../../components/LayoutNav/layoutNav";
import Data from "../../../../../data/painting.json";
import styles from "./colorPicker.module.scss";

export default function page() {
  const data = Data.madeleine;
  const [currentColor, setCurrentColor] = useState(data[0]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  // console.log(currentColor);

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
          <img src="" alt="" />
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
            {/* <h4>{color.colorName}</h4> */}
          </div>
        ))}
      </div>
      <div className={styles.answer}>
        {showAnswer &&
          (currentColor.isCorrect ? (
            <p>Bonne réponse</p>
          ) : (
            <p>Mauvaise réponse</p>
          ))}
      </div>
      <div className={styles.validation}>
        {isCorrect ? (
          <Link href="/experience/madeleine/transiSlider">
            <p>Suivant</p>
          </Link>
        ) : (
          <button onClick={() => handleValidationClick(currentColor)}>
            Valider
          </button>
        )}
      </div>

      {/* <Link href="/experience/madeleine/transiSlider">navigate to transi</Link> */}
      {/* </div> */}
    </LayoutNav>
  );
}
