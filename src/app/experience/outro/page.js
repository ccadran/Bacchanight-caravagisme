import React from "react";
import Layout from "@/app/components/Layout/layout";
import Dialogues from "@/app/components/Dialogues/dialogues";
import Data from "../../../data/outro.json";

export default function page() {
  const data = Data.intro;
  return (
    <Layout>
      <Dialogues data={data} />
    </Layout>
  );
}
