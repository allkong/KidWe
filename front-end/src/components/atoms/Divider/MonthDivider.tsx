import React from 'react';

export interface MonthDividerProps {
  text: string;
  color: 'secondary' | 'gray';
}

const Divider = ({text, color}: MonthDividerProps) => {
  const colorClass = color === 'secondary' ? 'bg-secondary' : 'bg-gray-100';

  return (
    <div className={`${colorClass} px-7 py-2`}>
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
};

export default Divider;
