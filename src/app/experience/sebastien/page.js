import React from "react";
import Dialogues from "../../components/Dialogues/dialogues";
import dataSebastien from "../../../data/sebastien.json";
import Layout from "../../components/Layout/layout";

export default function () {
  return (
    <Layout>
      <Dialogues data={dataSebastien.intro} />
    </Layout>
  );
}
