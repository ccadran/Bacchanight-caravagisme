import React from "react";
import Dialogues from "../../../components/Dialogues/dialogues";
import dataMadeleine from "../../../../data/madeleine.json";

export default function () {
  return (
    <div>
      <Dialogues data={dataMadeleine.transition} />
    </div>
  );
}
