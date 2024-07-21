import React from 'react';
import Icon from '@/assets/icons/close-line.svg';

type CloseButtonProps = {
  // onClick: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({}) => {
  return (
    <button>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default CloseButton;
