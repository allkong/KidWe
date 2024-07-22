import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  text: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  text,
}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={src} alt={alt} width={width} height={height} />
      <p>{text}</p>
    </div>
  );
};

export default ImageComponent;
