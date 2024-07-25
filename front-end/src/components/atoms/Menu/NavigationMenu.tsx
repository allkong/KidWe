interface NavigationMenuProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  text: string;
}

const NavigationMenu = ({
  src,
  alt,
  width,
  height,
  text,
}: NavigationMenuProps) => {
  return (
    <div className="flex flex-col items-center w-1/3 p-1 space-y-1">
      <img src={src} alt={alt} width={width} height={height} />
      <p className="font-medium text-2xs">{text}</p>
    </div>
  );
};

export default NavigationMenu;
