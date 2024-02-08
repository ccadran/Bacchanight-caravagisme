"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("wichEnd");
  return (
    <>
      <h1>LA FIN</h1>
      {search === "1" ? (
        <Link href={`/experience/outro/otherEnd?index=3`}>
          Rejouer depuis le début
        </Link>
      ) : (
        <Link href={`/experience/outro/otherEnd?index=2`}>
          Rejouer depuis le début 2
        </Link>
      )}
    </>
  );
}
