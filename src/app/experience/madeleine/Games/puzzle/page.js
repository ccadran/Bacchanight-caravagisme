"use client";
import { useState, useEffect, React } from "react";
import Link from "next/link";
import LayoutNav from "../../../../components/LayoutNav/layoutNav";

import styles from "./puzzle.module.scss";

import ImageTile from "@/app/components/Tile/tile.js";

export default function PuzzleGame() {
  const defaultTiles = [
    {
      src: "/images/puzzle/tile1.png",
      alt: "Puzzle tile 1",
      rotation: 360,
    },
    {
      src: "/images/puzzle/tile2.png",
      alt: "Puzzle tile 2",
      rotation: 90,
    },
    {
      src: "/images/puzzle/tile3.png",
      alt: "Puzzle tile 3",
      rotation: 180,
    },
    {
      src: "/images/puzzle/tile4.png",
      alt: "Puzzle tile 4",
      rotation: 270,
    },
    {
      src: "/images/puzzle/tile5.png",
      alt: "Puzzle tile 5",
      rotation: 270,
    },
    {
      src: "/images/puzzle/tile6.png",
      alt: "Puzzle tile 6",
      rotation: 270,
    },
    {
      src: "/images/puzzle/tile7.png",
      alt: "Puzzle tile 7",
      rotation: 180,
    },
    {
      src: "/images/puzzle/tile8.png",
      alt: "Puzzle tile 8",
      rotation: 360,
    },
    {
      src: "/images/puzzle/tile9.png",
      alt: "Puzzle tile 9",
      rotation: 90,
    },
  ];

  const handleClick = (index) => {
    const nextTiles = tiles.map((tile, i) => {
      if (index === i) {
        return {
          ...tile,
          rotation: tile.rotation === 360 ? 90 : tile.rotation + 90,
        };
      } else {
        return tile;
      }
    });
    setTiles(nextTiles);
  };

  const isPuzzleSolved = () => {
    let solvedTiles = 0;
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].rotation === 0 || tiles[i].rotation === 360) {
        solvedTiles++;
      }
    }
    if (solvedTiles === tiles.length) {
      return true;
    }
  };

  const [tiles, setTiles] = useState(defaultTiles);

  useEffect(() => {
    isPuzzleSolved();
  }, [tiles]);

  return (
    <LayoutNav>
      <div className={styles.puzzleContainer}>
        <div className={styles.consignes}>
          <div className={styles.avatarContainer}>
            <img src="/images/avatar.png" alt="" />
          </div>
          <p>
            Remets le tableau en ordre en cliquant sur les pièces pour les faire
            tourner.
          </p>
        </div>
        <div className={styles.puzzle}>
          {tiles.map((tile, index) => (
            <ImageTile
              key={index}
              src={tile.src}
              alt={tile.alt}
              rotation={tile.rotation}
              handleClick={() => handleClick(index)}
            />
          ))}
        </div>
        {isPuzzleSolved() && (
          <div className={`${styles.answer} `}>
            <div className={styles.answerContent}>
              <h4>Scientifique</h4>
              <p>
                Super, t’as réussi! Un crâne donc, un peu glauque mais j’adore!
              </p>
            </div>
          </div>
        )}
        {isPuzzleSolved() && (
          <Link
            className={styles.link}
            href="/experience/madeleine/transiColor"
          >
            Continuer{" "}
          </Link>
        )}
      </div>
    </LayoutNav>
  );
}
