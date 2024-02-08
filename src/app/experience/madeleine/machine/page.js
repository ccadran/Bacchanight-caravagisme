import React from "react";
import Link from "next/link";
import LayoutNav from "../../../components/LayoutNav/layoutNav";
import Machine from "../../../components/Machine/machine";

export default function page() {
  return (
    <LayoutNav>
      <Machine link={"/experience/sebastien/"} />
      <Link href="/experience/sebastien/">navigate to sebastien</Link>
    </LayoutNav>
  );
}
