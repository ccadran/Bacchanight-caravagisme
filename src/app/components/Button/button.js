import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

export default function button({ link, text }) {
  return (
    <div className={styles.button}>
      <Link href={link}>{text}</Link>
    </div>
  );
}
