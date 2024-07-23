import React from 'react';
import Icon from '@/assets/icons/left-line.svg';

interface BracketButtonProps {
  direction: 'left' | 'right';
  // onClick: () => void;
}

const BracketButton: React.FC<BracketButtonProps> = ({
  direction,
}: BracketButtonProps) => {
  const rotationClass = direction === 'right' ? 'rotate-180' : '';

  return (
    <button className={`${rotationClass}`}>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default BracketButton;
