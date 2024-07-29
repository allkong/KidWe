import React from 'react';

export interface ModalBodyProps {
  children?: React.ReactNode | string;
}

const ModalBody = ({children}: ModalBodyProps) => {
  return <div className="px-10 py-10 w-72 h-fit">{children}</div>;
};

export default ModalBody;
