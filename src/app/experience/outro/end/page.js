import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1>LA FIN</h1>
      <Link href={`/experience/outro/otherEnd?index=3`}>
        Rejouer depuis le début
      </Link>
      <Link href={`/experience/outro/otherEnd?index=2`}>
        Rejouer depuis le début 2
      </Link>
    </>
  );
}
