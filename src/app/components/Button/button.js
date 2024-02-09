import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

export default function button({ link, text }) {
  return (
    <Link className={styles.button} href={link}>
      <h4>{text}</h4>
    </Link>
  );
}
