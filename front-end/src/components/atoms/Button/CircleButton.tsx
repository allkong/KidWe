import React from 'react';

interface CircleButtonProps {
  label: string;
  date: Date;
  variant?: 'positive' | 'negative';
}

const CircleButton: React.FC<CircleButtonProps> = ({
  label,
  date,
  variant = 'positive',
}) => {
  const baseClass =
    'px-6 py-2 w-28 h-28 flex flex-col justify-center items-center font-bold rounded-full text-base';
  const variantClass =
    variant === 'positive' ? 'bg-primary text-white' : 'bg-gray-200';
  const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;
  return (
    <button className={`${baseClass} ${variantClass}`}>
      <p>{label}</p>
      <p>{formattedDate}</p>
    </button>
  );
};

export default CircleButton;
