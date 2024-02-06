import { useState } from 'react';
import Image from 'next/image';

const ImageTile = ({ src, alt, initRotation }) => {
  const [rotation, setRotation] = useState(initRotation);

  const handleClick = () => {
    const newRotation = rotation >= 360 ? 0 : rotation + 90;
    setRotation(newRotation);
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={167}
      height={167}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={handleClick}
      draggable={false}
    />
  );
};

export default ImageTile;
