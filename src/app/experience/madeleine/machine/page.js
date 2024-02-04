import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout/layout";

export default function page() {
  return (
    <Layout>
      <div>machine</div>
      <Link href="/experience/sebastien/">navigate to sebastien</Link>
    </Layout>
  );
}
