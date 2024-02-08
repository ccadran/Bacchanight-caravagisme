import Link from "next/link";
import React from "react";
import LayoutNav from "../../../components/LayoutNav/layoutNav";
import Machine from "@/app/components/Machine/machine";

export default function page() {
  return (
    <LayoutNav>
      <Machine link={"/experience/madeleine"} />
    </LayoutNav>
  );
}
