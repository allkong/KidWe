import React from 'react';
import {NavLink} from 'react-router-dom';

interface NavigationMenuProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  to: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({Icon, text, to}) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `flex flex-col items-center w-1/3 p-1 space-y-1 ${isActive ? 'text-black' : 'text-gray-150'}`
      }
    >
      {({isActive}) => (
        <>
          <Icon fill={isActive ? 'black' : '#C3C3C3'} width="26" height="26" />
          <p className="font-medium text-2xs">{text}</p>
        </>
      )}
    </NavLink>
  );
};

export default NavigationMenu;
