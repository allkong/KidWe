import React, {forwardRef} from 'react';

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
}

const Input = forwardRef(
  (
    {onChange, value, ...props}: InputProps,
    ref?: React.ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const keyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing) return;
    };

    return (
      <input
        className="w-full px-3 py-2 text-sm font-normal text-gray-300 transition-shadow border-none rounded-sm bg-[#F5F5F5] focus:outline-none focus:border focus:border-color-300 focus:shadow-sm focus:shadow-gray-100"
        onChange={handleChange}
        onKeyDown={keyDownHandle}
        {...props}
        value={value}
        ref={ref}
      />
    );
  }
);

export default Input;
