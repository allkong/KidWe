import React from 'react';

interface TabButtonProps {
  isActive: boolean;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({isActive, label}) => {
  const variantClass = isActive ? 'text-black' : 'text-gray-200';
  return <button className={`${variantClass}`}>{label}</button>;
};

export default TabButton;
