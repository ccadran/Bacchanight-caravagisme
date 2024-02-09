"use client";
import React, { Suspense } from "react";
import Layout from "@/app/components/Layout/layout";
import Dialogues from "@/app/components/Dialogues/dialogues";
import { useSearchParams } from "next/navigation";
import Data from "../../../../data/outro.json";

export default function OtherEnd() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherEndContent />
      </Suspense>
    </Layout>
  );
}

function OtherEndContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("index") || 0;
  console.log(search);

  const data = Data.outro;

  return <Dialogues data={data} index={search} />;
}
