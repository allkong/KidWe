import {useCheckBox} from '@/hooks/CheckBox/useCheckBox';
import {forwardRef} from 'react';

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
    const [isChecked, handleClick] = useCheckBox(controlledIsChecked, onClick);

    const notSelectedClass = 'bg-white border-gray-200';
    const selectedClass = 'bg-secondary border-primary';
    const colorClass = isChecked ? selectedClass : notSelectedClass;

    return (
      <div
        className={`${colorClass} cursor-pointer box-border flex items-center justify-center h-8 px-2 py-2 text-center text-gray-300 border rounded-md min-w-14`}
        onClick={handleClick}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          className="hidden"
          readOnly
        />
        <p className="text-sm">{label}</p>
      </div>
    );
  }
);

export default CheckBoxButton;
