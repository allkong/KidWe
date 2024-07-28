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
        className="w-full px-2 py-2 text-xs font-normal text-gray-300 transition-shadow bg-gray-100 border-none rounded-lg focus:outline-none focus:border focus:border-color-300 focus:shadow-sm focus:shadow-gray-100"
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
