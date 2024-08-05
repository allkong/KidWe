import React from 'react';
// import checkIcon from '@/assets/icons/check-fill.svg';
import CheckWhiteIcon from '@/assets/icons/check-fill-white.svg';

interface RoleSelectorProps {
  label?: string;
  isSelected: boolean;
  onClick: () => void;
  value: string;
  explain?: string;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({
  label,
  isSelected,
  onClick,
  value,
  explain,
}) => {
  return (
    <div>
      <button
        className={`px-4 py-2 rounded w-full h-24 flex items-center justify-between text-black ${
          isSelected ? 'bg-secondary ' : 'bg-gray-100 '
        }`}
        onClick={onClick}
      >
        <div className="flex flex-col items-start justify-center">
          <p>{label}</p>
          <p>{explain}</p>
        </div>
        <img src={isSelected ? CheckWhiteIcon : ''} alt="" />
      </button>
    </div>
  );
};

export default RoleSelector;
