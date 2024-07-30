import {forwardRef, useState} from 'react';

interface CheckBoxButtonProps {
  isChecked?: boolean;
  onClick?: () => void;
  label?: string;
}

const CheckBoxButton = forwardRef(
  (
    {isChecked: controlledIsChecked, onClick, label}: CheckBoxButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const isControlled = controlledIsChecked !== undefined;

    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
      if (!isControlled) {
        setIsChecked(!isChecked);
      }
      onClick?.();
    };

    const notSelectedClass = 'bg-white border-gray-200';
    const selectedClass = 'bg-secondary border-primary';
    let colorClass;

    if (isControlled) {
      colorClass = controlledIsChecked ? selectedClass : notSelectedClass;
    } else {
      colorClass = isChecked ? selectedClass : notSelectedClass;
    }

    return (
      <div
        className={`${colorClass} cursor-pointer box-border flex items-center justify-center h-8 px-2 py-2 text-center text-gray-300 border rounded-md min-w-14 w-fit`}
        onClick={handleClick}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={isControlled ? controlledIsChecked : isChecked}
          className="hidden"
          readOnly
        />
        <p className="text-sm">{label}</p>
      </div>
    );
  }
);

export default CheckBoxButton;
