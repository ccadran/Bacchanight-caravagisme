import React from "react";
import styles from "./dialogue.module.scss";

export default function dialogue({ dialogue, className, speaker }) {
  return (
    <div className={`${styles.dialogue} ${className}`}>
      <h4>{speaker}</h4>
      <p>{dialogue}</p>
    </div>
  );
}
