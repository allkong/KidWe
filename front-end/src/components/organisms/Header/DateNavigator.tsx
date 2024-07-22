import React from 'react';
import BracketButton from '@/components/atoms/Button/BracketButton';

interface DateNavigatorProps {
  title: string;
}

const DateNavigator: React.FC<DateNavigatorProps> = ({title}) => {
  return (
    <div className="flex items-center justify-evenly">
      <BracketButton direction="left" />
      <h1 className="font-semibold">{title}</h1>
      <BracketButton direction="right" />
    </div>
  );
};

export default DateNavigator;
