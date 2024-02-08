import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layout/layout";
import Machine from "@/app/components/Machine/machine";

export default function page() {
  return (
    <Layout>
      <Machine link={"/experience/outro/"} />
    </Layout>
  );
}
