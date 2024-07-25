import React from 'react';

interface NavigationMenuProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  text: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  src,
  alt,
  width,
  height,
  text,
}: NavigationMenuProps) => {
  return (
    <div className="flex flex-col items-center w-1/3">
      <img src={src} alt={alt} width={width} height={height} />
      <p>{text}</p>
    </div>
  );
};

export default NavigationMenu;
