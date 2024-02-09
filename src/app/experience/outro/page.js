import React from "react";
import Layout from "@/app/components/Layout/layout";
import { useSearchParams } from "next/navigation";

import Dialogues from "@/app/components/Dialogues/dialogues";
import Data from "../../../data/outro.json";

export default function outro() {
  const data = Data.outro;
  return (
    <Layout>
      <Dialogues data={data} />
    </Layout>
  );
}
