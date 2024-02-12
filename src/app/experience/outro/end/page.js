"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import LayoutNav from "@/app/components/LayoutNav/layoutNav";
import styles from "./end.module.scss";

export default function End() {
  return (
    <LayoutNav>
      <Suspense fallback={<div>Loading...</div>}>
        <EndContent />
      </Suspense>
    </LayoutNav>
  );
}

function EndContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("wichEnd");

  return (
    <div className={styles.end}>
      <div className={styles.endPhrase}>
        {search === "2"
          ? ". Bravo ! Le caravagisme se souviendra de toi."
          : "Tu as laissé la censure gagner. La Confédération des Intéressés de l’Art a été dissoute et désormais il ne reste que l’art numérique."}
      </div>
      <div className={styles.otherEnd}>
        {search === "2" ? (
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
  );
}
