'use client';
import { useState, React } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './puzzle.module.scss';

import ImageTile from '@/app/components/Tile/tile.js';

export default function page() {
  const tiles = [
    { src: '/images/puzzle/tile1.png', alt: 'Puzzle tile 1', initRotation: 0 },
    { src: '/images/puzzle/tile2.png', alt: 'Puzzle tile 2', initRotation: 90 },
    {
      src: '/images/puzzle/tile3.png',
      alt: 'Puzzle tile 3',
      initRotation: 180,
    },
    {
      src: '/images/puzzle/tile4.png',
      alt: 'Puzzle tile 4',
      initRotation: 270,
    },
    {
      src: '/images/puzzle/tile5.png',
      alt: 'Puzzle tile 5',
      initRotation: 270,
    },
    {
      src: '/images/puzzle/tile6.png',
      alt: 'Puzzle tile 6',
      initRotation: 270,
    },
    {
      src: '/images/puzzle/tile7.png',
      alt: 'Puzzle tile 7',
      initRotation: 180,
    },
    {
      src: '/images/puzzle/tile8.png',
      alt: 'Puzzle tile 8',
      initRotation: 0,
    },
    {
      src: '/images/puzzle/tile9.png',
      alt: 'Puzzle tile 9',
      initRotation: 90,
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        {tiles.map((tile, index) => (
          <ImageTile
            key={index}
            src={tile.src}
            alt={tile.alt}
            initRotation={tile.initRotation}
          />
        ))}
      </div>
      <Link href="/experience/madeleine/machine">navigate to machine</Link>
    </>
  );
}
