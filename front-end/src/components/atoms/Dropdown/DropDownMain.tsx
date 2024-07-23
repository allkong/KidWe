import React from 'react';
import {ReactNode} from 'react';

export interface DropdownMainProps {
  children?: ReactNode;
  isOpen: boolean;
}

const DropdownMain = ({children, isOpen}: DropdownMainProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1 p-2 border border-gray-200 border-solid rounded-md shadow-md w-fit h-fit">
      {children}
    </div>
  );
};

export default DropdownMain;
