import React from "react";
import styles from "./credits.module.scss";

export default function page() {
  return (
    <div className={styles.container}>
      <h1>Crédits</h1>
      <div className={styles.wrapper}>
        <div className={styles.rectangle}>
          <h2>Design</h2>
          <p>KAHLAOUI Soufiyan</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Design</h2>
          <p>MADELEINE Clément</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Écriture</h2>
          <p>DEULCEUX Timothée</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Écriture</h2>
          <p>ANDRIAMIHAJARIVO Yvan</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Développement</h2>
          <p>BERBER Nino</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Développement</h2>
          <p>CADRAN Clario</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Acteur</h2>
          <p>Maël Ledrin</p>
        </div>
        <div className={styles.rectangle}>
          <h2>Acteur</h2>
          <p>Francois DA CAMARA</p>
        </div>
      </div>
    </div>
  );
}
