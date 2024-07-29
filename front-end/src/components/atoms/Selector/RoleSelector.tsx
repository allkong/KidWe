import React from 'react';
import checkIcon from '@/assets/icons/check-fill.svg';
import CheckWhiteIcon from '@/assets/icons/check-fill-white.svg';

interface RoleSelectorProps {
  isSelected: boolean;
  onClick: () => void;
  value: string;
  explain?: string;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({
  isSelected,
  onClick,
  value,
  explain,
}) => {
  return (
    <div>
      <button
        className={`px-4 py-2 rounded w-full h-24 flex items-center justify-between ${
          isSelected ? 'bg-secondary text-white' : 'bg-gray-100 text-black'
        }`}
        onClick={onClick}
      >
        <div className="flex flex-col items-start justify-center">
          <p>{value}</p>
          <p>{explain}</p>
        </div>
        <img src={isSelected ? CheckWhiteIcon : checkIcon} alt="" />
      </button>
    </div>
  );
};

export default RoleSelector;
