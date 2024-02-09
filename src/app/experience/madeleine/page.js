import React from "react";
import Dialogues from "../../components/Dialogues/dialogues";
import dataMadeleine from "../../../data/madeleine.json";
import Layout from "../../components/Layout/layout";

export default function introMadeleine() {
  return (
    <Layout>
      <Dialogues data={dataMadeleine.intro} />
    </Layout>
  );
}
