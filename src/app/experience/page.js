import React from "react";
import Dialogues from "../components/Dialogues/dialogues";
import dataIntro from "../../data/intro.json";

export default function () {
  return (
    <div>
      <Dialogues data={dataIntro.intro} />
    </div>
  );
}
