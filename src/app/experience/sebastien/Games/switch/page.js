'use client';
import { useState, React } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './switch.module.scss';

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const slider = event.target;
    const newIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider} onScroll={handleScroll}>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/LIVRE.png'}
            width={500}
            height={375}
            alt="Slide image 1"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/FIOLE.png'}
            width={500}
            height={375}
            alt="Slide image 2"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/FLECHE.png'}
            width={500}
            height={375}
            alt="Slide image 3"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={'/images/sebastien/POMME.png'}
            width={500}
            height={375}
            alt="Slide image 4"
          />
        </div>
      </div>
      <Link href="/experience/madeleine/machine">navigate to machine</Link>
    </div>
  );
}
