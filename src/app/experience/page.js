import React from "react";
import Dialogues from "../components/Dialogues/dialogues";
import dataIntro from "../../data/intro.json";
import Layout from "../components/Layout/layout";

export default function intro() {
  return (
    <Layout>
      <Dialogues data={dataIntro.intro} />
    </Layout>
  );
}
