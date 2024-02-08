'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './switch.module.scss';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo(0, 0);
    }
  }, []);

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
          behavior: 'smooth',
        });
        handleScroll();
      }
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, offsetWidth } = sliderRef.current;
      const prevScrollLeft = scrollLeft - offsetWidth;

      if (prevScrollLeft >= 0) {
        sliderRef.current.scrollTo({
          left: prevScrollLeft,
          behavior: 'smooth',
        });
        handleScroll();
      }
    }
  };

  const handleValidation = () => {
    if (clicked) {
      setClicked(true);
      if (currentIndex != 2) {
        return false;
      } else {
        return true;
      }
    } else {
      setClicked(false);
      return false;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider} ref={sliderRef} onScroll={handleScroll}>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/LIVRE.png'}
            width={330}
            height={249}
            className={styles.image}
            alt="Slide image 1"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/FIOLE.png'}
            width={330}
            height={249}
            className={styles.image}
            alt="Slide image 2"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/FLECHE.png'}
            width={330}
            height={249}
            className={styles.image}
            alt="Slide image 3"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/POMME.png'}
            width={330}
            height={249}
            className={styles.image}
            alt="Slide image 4"
          />
        </div>
      </div>
      <button className={styles.arrows} onClick={scrollPrev}>
        Précédent
      </button>
      <button className={styles.arrows} onClick={scrollNext}>
        Suivant
      </button>
      <button className={styles.button} onClick={handleValidation}>
        Valider
      </button>
      {handleValidation === true ? (
        <Link href="/experience/madeleine/machine">navigate to machine</Link>
      ) : null}
    </div>
  );
}
