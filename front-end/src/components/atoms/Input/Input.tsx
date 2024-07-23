import React, {ChangeEventHandler} from 'react';

interface InputProps extends Omit<React.ComponentProps<'input'>, 'value'> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({onChange, value, ...props}: InputProps) => {
  return (
    <input
      className="px-2 py-2 w-full border-none bg-gray-100 rounded-lg text-gray-300 font-normal text-xs focus:outline-none focus:border focus:border-color-300 focus:shadow-sm focus:shadow-gray-100 transition-shadow"
      onChange={onChange}
      {...props}
      value={value}
    />
  );
};

export default Input;
