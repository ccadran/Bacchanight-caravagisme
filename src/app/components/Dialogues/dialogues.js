"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Dialogue from "../../components/Dialogue/dialogue";
import styles from "./dialogues.module.scss";

export default function Page({ data, index }) {
  const [currentIndex, setCurrentIndex] = useState(index || 0);
  const [showChoices, setShowChoices] = useState(false);
  const choicesContainer = useRef();
  const dialoguesContainerRef = useRef(null);

  useEffect(() => {
    // Reset scroll position to 0 when currentIndex changes
    dialoguesContainerRef.current.scrollTop = 0;
  }, [currentIndex]);

  useEffect(() => {
    const audioElement = document.getElementById("audioElement");

    if (audioElement) {
      const handleAudioEnd = () => {};

      audioElement.addEventListener("ended", handleAudioEnd);

      return () => {
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, [currentIndex]);

  useEffect(() => {
    // Create GSAP timeline for line animation
    const lineTimeline = gsap.timeline({
      onComplete: () => {
        console.log("test");
        setShowChoices(true);
      },
    });

    // Add each line to the timeline with a fade-in effect
    data[currentIndex].text.forEach((line, index) => {
      const lineElement = document.querySelector(`.line-${index}`);

      lineTimeline.fromTo(
        `.line-${index}`,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onStart: () => {
            // Get the height of the current line
            const lineHeight = lineElement.offsetHeight;
          },
        },
        index * 3.5 // Adjust the delay between lines if needed
      );
    });

    // Play the timeline
    lineTimeline.play();

    return () => {
      lineTimeline.kill(); // Kill the timeline when component unmounts
    };
  }, [currentIndex]);

  useEffect(() => {
    gsap.fromTo(
      choicesContainer.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, [showChoices]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = dialoguesContainerRef.current.scrollTop;
    };

    const currentRef = dialoguesContainerRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChoiceClick = (event, switchToGame, switchToIndex) => {
    if (switchToGame) {
      // console.log("Switching to game:", switchToGame);
    } else if (switchToIndex) {
      setCurrentIndex(switchToIndex);
      event.preventDefault();
      // setShowChoices(false);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowChoices(false);
      audioElement.play();
    }
  };

  const renderChoices = () => {
    const choiceClass =
      data[currentIndex].choices.length > 1
        ? styles.multipleChoice
        : styles.singleChoice;

    if (showChoices) {
      return (
        <div ref={choicesContainer} className={styles.choicesContainer}>
          {data[currentIndex].choices &&
            data[currentIndex].choices.map((choice, index) => (
              <a
                key={index}
                className={`${choiceClass}`}
                onClick={() =>
                  handleChoiceClick(
                    event,
                    choice.switchToGame,
                    choice.switchToIndex
                  )
                }
                href={choice.switchToGame ? choice.switchToGame : undefined}
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
    <div className={styles.dialogues} ref={dialoguesContainerRef}>
      {currentIndex < data.length && (
        <>
          <div className={styles.dialoguesContainer}>
            {data[currentIndex].text.map((line, index) => (
              <Dialogue
                className={`line-${index}`}
                key={index}
                dialogue={line.text}
                speaker={line.speaker}
              />
            ))}
          </div>
          {renderChoices()}
          <audio
            id="audioElement"
            src={`${data[currentIndex].audio}.mp3`}
            // controls
            autoPlay
          ></audio>
        </>
      )}
    </div>
  );
}
