"use client";

import React, { useState, useEffect } from "react";
import dataIntro from "../../data/intro.json";
import Dialogue from "../components/Dialogue/dialogue";

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
    console.log(currentIndex, dataIntro.intro[currentIndex].audio);
  }, []);

  return (
    <div className="dialogues">
      {currentIndex < dataIntro.intro.length && (
        <>
          <div className="dialogues-container">
            {dataIntro.intro[currentIndex].text.map((line, index) => (
              <Dialogue key={index} dialogue={line} />
            ))}
          </div>
          <div className="choices-container">
            {showChoices &&
              dataIntro.intro[currentIndex].choices &&
              dataIntro.intro[currentIndex].choices.map((choice, index) => (
                <a
                  key={index}
                  onClick={() => handleChoiceClick(choice.switchToGame)}
                  href={
                    choice.switchToGame
                      ? `/experience/${choice.switchToGame}`
                      : undefined
                  }
                >
                  {choice.proposition}
                </a>
              ))}
          </div>

          <audio
            id="audioElement"
            src={`${dataIntro.intro[currentIndex].audio}.mp3`}
            controls
            autoPlay
          ></audio>
        </>
      )}
    </div>
  );
}
