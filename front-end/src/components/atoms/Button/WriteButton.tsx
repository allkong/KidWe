import React from 'react';
import pencil from '@/assets/icons/pencil.svg';
interface WriteButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const WriteButton = ({onClick}: WriteButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed flex items-center justify-center rounded-full shadow-sm cursor-pointer bg-primary w-14 h-14 right-10 bottom-20 "
    >
      <img src={pencil} alt={'NoWriteImage'} className="w-8 h-8 " />
    </div>
  );
};

export default WriteButton;
