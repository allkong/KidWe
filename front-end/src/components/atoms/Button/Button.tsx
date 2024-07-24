import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'positive' | 'negative';
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'positive',
}: ButtonProps) => {
  const baseClass = 'px-6 py-2 font-bold text-white rounded-full text-large';
  const variantClass = variant === 'positive' ? 'bg-primary' : 'bg-gray-200';

  return <button className={`${baseClass} ${variantClass}`}>{label}</button>;
};

export default Button;
