import React from "react";
import Layout from "@/app/components/Layout/layout";
import Dialogues from "@/app/components/Dialogues/dialogues";
import Data from "../../../../data/outro.json";

export default function afterGame() {
  const data = Data.afterGame;
  return (
    <Layout>
      <Dialogues data={data} />
    </Layout>
  );
}
