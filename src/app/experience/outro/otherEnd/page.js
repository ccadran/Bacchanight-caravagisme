"use client";

import React from "react";
import Layout from "@/app/components/Layout/layout";
import Dialogues from "@/app/components/Dialogues/dialogues";
import { useRouter, useSearchParams } from "next/navigation";
import Data from "../../../../data/outro.json";

export default function Page() {
  const router = useRouter();
  let currentIndex = 0; // Par défaut, si l'index n'est pas encore disponible
  const searchParams = useSearchParams();
  const search = searchParams.get("index") || 0;
  console.log(search);

  const data = Data.outro;

  return (
    <Layout>
      <Dialogues data={data} index={search} />
    </Layout>
  );
}
