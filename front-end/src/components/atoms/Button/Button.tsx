import React from 'react';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <button className="px-6 py-2 font-bold text-white rounded-full text-large bg-primary">
      {label}
    </button>
  );
};

export default Button;
