import React from 'react';

interface DashedButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  src?: string;
  variant?: 'positive' | 'negative';
}

const DashedButton = ({label, onClick, src, variant}: DashedButtonProps) => {
  const colorClass =
    variant === 'positive'
      ? 'border-primary text-primary'
      : 'border-gray-200 text-gray-200';

  return (
    <button
      className={`box-border gap-2 w-full flex flex-row items-center justify-center px-6 py-2 font-bold  border  border-dashed rounded-full h-9 text-large ${colorClass}`}
      onClick={onClick}
    >
      <img src={src} />
      {label}
    </button>
  );
};

export default DashedButton;
