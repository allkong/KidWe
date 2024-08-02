import React from 'react';

export interface DividerProps {
  color?: 'gray' | 'black';
}

const Divider = ({color}: DividerProps) => {
  const colorClass = color === 'black' ? 'border-gray-300' : 'border-gray-200';

  return <hr className={`w-full border-solid border-b-1 ${colorClass}`} />;
};

export default Divider;
