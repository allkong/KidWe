import React from 'react';
import BackButton from '@/components/atoms/Button/BackButton';
import CloseButton from '@/components/atoms/Button/CloseButton';

interface HeaderProps {
  title: string;
  buttonType: 'back' | 'close';
}

const Header: React.FC<HeaderProps> = ({title, buttonType}) => {
  return (
    <header className="flex items-center justify-between p-2 bg-white">
      {buttonType === 'back' ? <BackButton /> : <CloseButton />}
      <h1 className="font-semibold">{title}</h1>
      <div className="w-6"></div>
    </header>
  );
};

export default Header;
