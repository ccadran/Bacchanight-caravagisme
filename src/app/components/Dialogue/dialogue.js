import React, { useState } from "react";
import styles from "./dialogue.module.scss";

export default function dialogue({ dialogue, className, speaker }) {
  console.log(speaker);
  return (
    <div className={`${styles.dialogue} ${className} ${styles[speaker]}`}>
      <h4>{speaker}</h4>
      <p>{dialogue}</p>
    </div>
  );
}
