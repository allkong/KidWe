import React from 'react';

export interface ModalBodyProps {
  children?: React.ReactNode | string;
}

const ModalBody = ({children}: ModalBodyProps) => {
  return <div className="px-2 py-2 my-2 w-72 min-h-40 h-fit">{children}</div>;
};

export default ModalBody;
