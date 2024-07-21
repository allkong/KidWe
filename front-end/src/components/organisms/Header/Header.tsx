import React from 'react';
import BackButton from '@/components/atoms/Button/BackButton';
import CloseButton from '@/components/atoms/Button/CloseButton';

type HeaderProps = {
  title: string;
  buttonType: 'back' | 'close';
};

const Header: React.FC<HeaderProps> = ({title, buttonType}) => {
  return (
    <header className="flex items-center justify-between">
      {buttonType === 'back' ? <BackButton /> : <CloseButton />}
      <h1 className="font-semibold">{title}</h1>
      <div></div>
    </header>
  );
};

export default Header;
