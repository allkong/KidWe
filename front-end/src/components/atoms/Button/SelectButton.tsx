import React from 'react';
import Icon from '@/assets/icons/down-small-fill.svg';

interface SelectButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  src?: string;
}

const SelectButton = ({label, onClick}: SelectButtonProps) => {
  return (
    <button
      className={
        'box-border gap-2 w-full flex flex-row items-center justify-center px-6 py-2 font-bold  border rounded-full h-9 text-large'
      }
      onClick={onClick}
    >
      {label}
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default SelectButton;
