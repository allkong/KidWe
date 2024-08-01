import React from 'react';
import Icon from '@/assets/icons/down-small-fill-2.svg?react';

interface SelectButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  src?: string;
}

const SelectButton = ({label, onClick}: SelectButtonProps) => {
  return (
    <button
      className={
        'box-border text-gray-200 border-gray-200 overflow-hidden justify-between w-full flex flex-row items-center px-3 py-1 font-normal border-2 rounded-full h-9 text-sm'
      }
      onClick={onClick}
    >
      <p>{label}</p>
      <Icon className="absolute right-3" height={10} width={10} />
    </button>
  );
};

export default SelectButton;
