"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./switch.module.scss";
import LayoutNav from "../../../../components/LayoutNav/layoutNav";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     sliderRef.current.scrollTo(0, 0);
  //   }
  // }, []);

  const handleScroll = (event) => {
    if (event) {
      const slider = event.target;
      const newIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = sliderRef.current;
      const maxScrollLeft = scrollWidth - offsetWidth;
      const nextScrollLeft = scrollLeft + offsetWidth;

      if (nextScrollLeft <= maxScrollLeft) {
        sliderRef.current.scrollTo({
          left: nextScrollLeft,
          behavior: "smooth",
        });
        handleScroll();
      }
    }
    setShowAnswer(false);
  };

  const handleValidation = () => {
    if (currentIndex === 2) {
      setIsCorrect(true);
    }
    setShowAnswer(true);
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, offsetWidth } = sliderRef.current;
      const prevScrollLeft = scrollLeft - offsetWidth;

      if (prevScrollLeft >= 0) {
        sliderRef.current.scrollTo({
          left: prevScrollLeft,
          behavior: "smooth",
        });
        handleScroll();
      }
    }
    setShowAnswer(false);
  };

  return (
    <LayoutNav>
      <div className={styles.consignes}>
        <div className={styles.avatarContainer}>
          <img src="/images/avatar.png" alt="" />
        </div>
        <p>Trouves l’image qui correspond au tableau.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.slider} ref={sliderRef} onScroll={handleScroll}>
          <div className={styles.slide}>
            <Image
              src={"/images/sebastien/LIVRE.png"}
              width={330}
              height={249}
              className={styles.image}
              alt="Slide image 1"
            />
          </div>
          <div className={styles.slide}>
            <Image
              src={"/images/sebastien/FIOLE.png"}
              width={330}
              height={249}
              className={styles.image}
              alt="Slide image 2"
            />
          </div>
          <div className={styles.slide}>
            <Image
              src={"/images/sebastien/FLECHE.png"}
              width={330}
              height={249}
              className={styles.image}
              alt="Slide image 3"
            />
          </div>
          <div className={styles.slide}>
            <Image
              src={"/images/sebastien/POMME.png"}
              width={330}
              height={249}
              className={styles.image}
              alt="Slide image 4"
            />
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.arrows} onClick={scrollPrev}>
            <img src="/icons/arrow-left.png" alt="" />
          </div>
          <div className={styles.indicators}>
            <img
              className={styles.indicator}
              src={
                currentIndex === 0
                  ? "/icons/green-indicator.png"
                  : "/icons/grey-indicator.png"
              }
              alt=""
            />
            <img
              className={styles.indicator}
              src={
                currentIndex === 1
                  ? "/icons/green-indicator.png"
                  : "/icons/grey-indicator.png"
              }
              alt=""
            />
            <img
              className={styles.indicator}
              src={
                currentIndex === 2
                  ? "/icons/green-indicator.png"
                  : "/icons/grey-indicator.png"
              }
              alt=""
            />
            <img
              className={styles.indicator}
              src={
                currentIndex === 3
                  ? "/icons/green-indicator.png"
                  : "/icons/grey-indicator.png"
              }
              alt=""
            />
          </div>
          <div className={styles.arrows} onClick={scrollNext}>
            <img src="/icons/arrow-right.png" alt="" />
          </div>
        </div>
        {showAnswer && (
          <div className={`${styles.answer} `}>
            <div className={styles.answerContent}>
              <h4>Scientifique</h4>
              {isCorrect ? (
                <p>Super, tu as réussi ! Merci beaucoup !</p>
              ) : (
                <p>Ca n’a pas l’air d’être la bonne réponse. </p>
              )}
            </div>
          </div>
        )}

        <div
          className={styles.confirmation}
          onClick={!isCorrect && handleValidation}
        >
          {isCorrect ? (
            <Link href="/experience/sebastien/transiMachine">Continuer</Link>
          ) : (
            <p>Valider</p>
          )}
        </div>
      </div>
    </LayoutNav>
  );
}
