"use client";

import Link from "next/link";
import React, { useState } from "react";
import LayoutNav from "../../../../components/LayoutNav/layoutNav";
import Data from "../../../../../data/painting.json";
import styles from "./colorPicker.module.scss";

export default function page() {
  const data = Data.madeleine;
  const [currentColor, setCurrentColor] = useState();
  console.log(data);
  return (
    <LayoutNav>
      <div className={styles.consignes}>
        <p>Retrouve la couleur du drap en cliquant sur la bonne couleur</p>
      </div>
      <div className={styles.paintingContainer}>
        <img src="" alt="" />
      </div>
      <Link href="/experience/madeleine/transiSlider">navigate to transi</Link>
    </LayoutNav>
  );
}
