import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  text: string;
}

const Icon: React.FC<IconProps> = ({src, alt, width, height, text}) => {
  return (
    <div className="flex flex-col w-1/3 items-center">
      <img src={src} alt={alt} width={width} height={height} />
      <p>{text}</p>
    </div>
  );
};

export default Icon;
