import {Link} from 'react-router-dom';

interface NavigationMenuProps {
  src: string;
  alt: string;
  text: string;
  to: string;
}

const NavigationMenu = ({src, alt, text, to}: NavigationMenuProps) => {
  return (
    <Link to={to} className="flex flex-col items-center w-1/3 p-1 space-y-1">
      <img src={src} alt={alt} className="w-7" />
      <p className="font-medium text-2xs">{text}</p>
    </Link>
  );
};

export default NavigationMenu;
