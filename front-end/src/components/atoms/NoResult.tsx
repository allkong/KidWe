import React from 'react';
import ghostIcon from '@/assets/icons/ghost-fill.svg';

interface NoResultProps {
  text: string;
}

const NoResult: React.FC<NoResultProps> = ({text}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={ghostIcon} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default NoResult;
