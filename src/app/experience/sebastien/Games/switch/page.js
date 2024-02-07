'use client';
import React from 'react';
import Slider from 'react-slick';

import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Image
            src={'/images/sebastien/LIVRE.png'}
            width={650}
            height={500}
            alt={'Slide 1'}
          />
        </div>
        <div>
          <Image
            src={'/images/sebastien/FIOLE.png'}
            width={650}
            height={500}
            alt={'Slide 2'}
          />
        </div>
        <div>
          <Image
            src={'/images/sebastien/FLECHE.png'}
            width={650}
            height={500}
            alt={'Slide 3'}
          />
        </div>
        <div>
          <Image
            src={'/images/sebastien/POMME.png'}
            width={650}
            height={500}
            alt={'Slide 1'}
          />
        </div>
      </Slider>

      <Link href="/experience/madeleine/machine">navigate to machine</Link>
    </>
  );
}
