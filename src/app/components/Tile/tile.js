import Image from "next/image";

const ImageTile = ({ src, alt, rotation, handleClick }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={90}
      height={90}
      style={{ transform: `rotate(${rotation}deg)` }}
      draggable={false}
      onClick={handleClick}
    />
  );
};

export default ImageTile;
