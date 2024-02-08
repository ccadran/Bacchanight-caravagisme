"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import LayoutNav from "@/app/components/LayoutNav/layoutNav";
import styles from "./end.module.scss";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("wichEnd");
  return (
    <LayoutNav>
      <div className={styles.end}>
        <div className={styles.endPhrase}>
          {search === "1"
            ? "Bravo d'avoir aidé"
            : "Vous avec laissé la censur gagné"}
        </div>
        <div className={styles.otherEnd}>
          {search === "1" ? (
            <Link href={`/experience/outro/otherEnd?index=3`}>
              Découvrir l'autre fin
            </Link>
          ) : (
            <Link href={`/experience/outro/otherEnd?index=2`}>
              Découvrir l'autre fin{" "}
            </Link>
          )}
        </div>
        <div className={styles.controller}>
          <Link href={`/`}>Rejouer</Link>
          <Link href={`/experience/outro/credits`}>Crédits</Link>
        </div>
      </div>
    </LayoutNav>
  );
}
