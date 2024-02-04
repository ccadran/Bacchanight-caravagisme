import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layout/layout";

export default function page() {
  return (
    <Layout>
      <div>machine</div>
      <Link href="/experience/outro/">navigate to outro</Link>
    </Layout>
  );
}
