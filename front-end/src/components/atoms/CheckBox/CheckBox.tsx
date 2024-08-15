import {useCheckBox} from '@/hooks/CheckBox/useCheckBox';
import {ForwardedRef, forwardRef} from 'react';
import Check from '@/assets/icons/check-fill.svg?react';

interface CheckBoxProps {
  isChecked?: boolean;
  onClick?: (value: boolean) => void;
}

const CheckBox = forwardRef(
  (
    {isChecked: controlledIsChecked, onClick}: CheckBoxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = useCheckBox(controlledIsChecked, onClick);

    const handleClick = () => {
      setIsChecked(!isChecked);
    };

    return (
      <div
        className="relative w-4 h-4 border border-gray-200 rounded-sm"
        onClick={e => {
          e.stopPropagation();
          handleClick();
        }}
      >
        {isChecked ? (
          <Check className="absolute" width={14} height={14} />
        ) : null}
        <input
          checked={isChecked}
          ref={ref}
          type="checkbox"
          className="hidden"
          readOnly
        />
      </div>
    );
  }
);

export default CheckBox;
