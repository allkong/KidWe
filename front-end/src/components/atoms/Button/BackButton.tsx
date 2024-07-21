import React from 'react';
import Icon from '@/assets/icons/arrow-left-line.svg';

type BackButtonProps = {
  // onClick: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({}) => {
  return (
    <button>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default BackButton;
