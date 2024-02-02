"use client";

import React, { useState, useEffect } from "react";
import dataSebastien from "../../../../data/sebastien.json";
import Dialogue from "../../../components/Dialogue/dialogue";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("audioElement");

    if (audioElement) {
      const handleAudioEnd = () => {
        setShowChoices(true);
      };

      audioElement.addEventListener("ended", handleAudioEnd);

      return () => {
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, [currentIndex]);

  const handleChoiceClick = (switchToGame) => {
    if (switchToGame) {
      console.log("Switching to game:", switchToGame);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowChoices(false);
      audioElement.play();
    }
  };

  useEffect(() => {
    console.log(currentIndex, dataSebastien.transition[currentIndex].audio);
  }, []);

  return (
    <div className="dialogues">
      {currentIndex < dataSebastien.transition.length && (
        <>
          <div className="dialogues-container">
            {dataSebastien.transition[currentIndex].text.map((line, index) => (
              <Dialogue key={index} dialogue={line} />
            ))}
          </div>
          <div className="choices-container">
            {showChoices &&
              dataSebastien.transition[currentIndex].choices &&
              dataSebastien.transition[currentIndex].choices.map(
                (choice, index) => (
                  <a
                    key={index}
                    onClick={() => handleChoiceClick(choice.switchToGame)}
                    href={
                      choice.switchToGame
                        ? `/experience/sebastien/${choice.switchToGame}`
                        : undefined
                    }
                  >
                    {choice.proposition}
                  </a>
                )
              )}
          </div>

          <audio
            id="audioElement"
            src={`${dataSebastien.transition[currentIndex].audio}.mp3`}
            controls
            autoPlay
          ></audio>
        </>
      )}
    </div>
  );
}
