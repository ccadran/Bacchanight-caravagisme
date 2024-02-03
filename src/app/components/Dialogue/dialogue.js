import React from "react";
import styles from "./dialogue.module.scss";

export default function dialogue({ dialogue, className }) {
  return (
    <div className={`${styles.dialogue} ${className}`}>
      <h4>Scientifique</h4>
      <p>{dialogue}</p>
    </div>
  );
}
