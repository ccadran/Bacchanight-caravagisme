"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Dialogue from "../../components/Dialogue/dialogue";
import styles from "./dialogues.module.scss";

export default function Page({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const dialoguesContainerRef = useRef(null);

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

            // Update scroll position when a line starts
            if (index >= 2) {
              const newScrollPosition =
                dialoguesContainerRef.current.scrollTop + lineHeight;

              gsap.to(dialoguesContainerRef.current, {
                scrollTop: newScrollPosition,
                duration: 0.5,
                ease: "power2.inOut",
              });
            }
          },
        },
        index * 1.5 // Adjust the delay between lines if needed
      );
    });

    // Play the timeline
    lineTimeline.play();

    return () => {
      lineTimeline.kill(); // Kill the timeline when component unmounts
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = dialoguesContainerRef.current.scrollTop;
      console.log("Scroll position:", scrollPosition);

      // Your scroll event handling logic here
    };

    const currentRef = dialoguesContainerRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className={styles.choicesContainer}>
          {data[currentIndex].choices &&
            data[currentIndex].choices.map((choice, index) => (
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
    <div className={styles.dialogues} ref={dialoguesContainerRef}>
      {currentIndex < data.length && (
        <>
          <div className={styles.dialoguesContainer}>
            {data[currentIndex].text.map((line, index) => (
              <Dialogue
                className={`line-${index}`}
                key={index}
                dialogue={line}
              />
            ))}
          </div>
          {renderChoices()}
          <audio
            id="audioElement"
            src={`${data[currentIndex].audio}.mp3`}
            controls
            autoPlay
          ></audio>
        </>
      )}
    </div>
  );
}
