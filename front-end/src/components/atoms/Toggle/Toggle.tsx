import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle = ({checked, onChange}: ToggleProps) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div
      className={`box-border flex items-center justify-center w-12 h-6 p-1 text-sm border border-solid rounded-xl transition-color ${checked ? 'bg-secondary border-primary ' : 'bg-gray-100 border-gray-200'}`}
      onClick={handleClick}
    >
      <div
        className={`w-4 h-4 relative rounded-full transition-transform duration-300 ${checked ? ' bg-primary translate-x-3' : ' bg-gray-200 -translate-x-3'}`}
      ></div>
    </div>
  );
};

export default Toggle;
