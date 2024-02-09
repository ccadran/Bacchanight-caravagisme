import React from "react";
import Link from "next/link";
import LayoutNav from "../../../components/LayoutNav/layoutNav";
import Machine from "../../../components/Machine/machine";

export default function MachineOutro() {
  return (
    <LayoutNav>
      <Machine link={"/experience/outro/afterGame"} />
    </LayoutNav>
  );
}
