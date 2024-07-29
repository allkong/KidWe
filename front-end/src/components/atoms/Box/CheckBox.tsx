import React from 'react';
import checkIcon from '@/assets/icons/check-fill.svg';

interface CheckBoxProps {
  label: string;
  isCheck?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({label, isCheck = false}) => {
  const baseClass =
    'w-4 h-4 border border-1 rounded flex items-center justify-center';
  return (
    <div className="flex flex-row items-center gap-x-2 border-b">
      <div className={`${baseClass}`}>
        {isCheck === true && (
          <img src={checkIcon} className="gray-300" alt="" />
        )}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default CheckBox;
