import React, {useState} from 'react';

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Toggle = ({checked: controlledChecked, onChange}: ToggleProps) => {
  const isControlled = controlledChecked !== undefined;

  const [checked, setChecked] = useState(false);
  const value = isControlled ? controlledChecked : checked;

  const handleClick = () => {
    if (isControlled) {
      onChange?.(!controlledChecked);
    } else {
      setChecked(!checked);
    }
  };

  return (
    <div
      className={`box-border flex items-center justify-center w-12 h-6 p-1 text-sm border border-solid rounded-full transition-color ${value ? 'bg-secondary border-primary ' : 'bg-gray-100 border-gray-200'}`}
      onClick={handleClick}
    >
      <div
        className={`w-4 h-4 relative rounded-full transition-transform duration-300 ${value ? ' bg-primary translate-x-3' : ' bg-gray-200 -translate-x-3'}`}
      ></div>
    </div>
  );
};

export default Toggle;
