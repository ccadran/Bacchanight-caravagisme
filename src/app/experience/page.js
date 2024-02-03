"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import dataIntro from "../../data/intro.json";
import Dialogue from "../components/Dialogue/dialogue";
import styles from "./page.module.scss";

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

  useEffect(() => {
    // Create GSAP timeline for line animation
    const lineTimeline = gsap.timeline({});

    // Add each line to the timeline with a fade-in effect
    dataIntro.intro[currentIndex].text.forEach((line, index) => {
      lineTimeline.fromTo(
        `.line-${index}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.inOut" },
        index * 1.5 // Adjust the delay between lines if needed
      );
    });

    // Play the timeline
    lineTimeline.play();

    return () => {
      lineTimeline.kill(); // Kill the timeline when component unmounts
    };
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

  const renderChoices = () => {
    if (showChoices) {
      return (
        <div className="choices-container">
          {dataIntro.intro[currentIndex].choices &&
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
      );
    }
    return null;
  };

  return (
    <div className={styles.dialogues}>
      {currentIndex < dataIntro.intro.length && (
        <>
          {/* <div className="dialogues-container">
            {dataIntro.intro[currentIndex].text.map((line, index) => (
              <Dialogue
                className={`line-${index}`}
                key={index}
                dialogue={line}
              />
            ))}
          </div>
          {renderChoices()} */}
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
