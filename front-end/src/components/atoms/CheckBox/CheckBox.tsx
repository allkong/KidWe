import {useCheckBox} from '@/hooks/CheckBox/useCheckBox';
import {ForwardedRef, forwardRef} from 'react';
import Check from '@/assets/icons/check-fill.svg?react';

interface CheckBoxProps {
  isChecked?: boolean;
  onClick?: () => void;
}

const CheckBox = forwardRef(
  (
    {isChecked: controlledIsChecked, onClick}: CheckBoxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isChecked, handleClick] = useCheckBox(controlledIsChecked, onClick);

    return (
      <div
        className="relative w-4 h-4 border border-gray-200 rounded-sm"
        onClick={handleClick}
      >
        {isChecked ? (
          <Check className="absolute" width={14} height={14} />
        ) : null}
        <input
          checked={isChecked}
          ref={ref}
          type="checkbox"
          className="hidden"
        />
      </div>
    );
  }
);

export default CheckBox;
