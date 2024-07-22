import React from 'react';

export type DropDownOptionProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const DropDownOption: React.FC<DropDownOptionProps> = ({text, onClick}) => {
  return (
    <div
      className="box-content px-2 py-2 text-left text-gray-200 transition-colors rounded-md cursor-pointer min-w-32 w-fit h-fit font-pretendard hover:bg-gray-100"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default DropDownOption;
