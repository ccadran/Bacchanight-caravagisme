import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { register } from 'swiper/element/bundle';
register();

export default function page() {
  return (
    <>
      <swiper-container>
        <swiper-slide>
          <Image src={'/images/sebastien/LIVRE.png'} width={650} height={500} />
        </swiper-slide>
        <swiper-slide>
          <Image src={'/images/sebastien/FIOLE.png'} width={650} height={500} />
        </swiper-slide>
        <swiper-slide>
          <Image
            src={'/images/sebastien/FLECHE.png'}
            width={650}
            height={500}
          />
        </swiper-slide>
        <swiper-slide>
          <Image src={'/images/sebastien/POMME.png'} width={650} height={500} />
        </swiper-slide>
      </swiper-container>

      <Link href="/experience/madeleine/machine">navigate to machine</Link>
    </>
  );
}
