import React from 'react';

interface TagProps {
  text: string;
  color: string;
}

const Tag = ({text, color}: TagProps) => {
  const colorClass = (() => {
    switch (color) {
      case 'red':
        return 'bg-red-400 text-white';
      case 'green':
        return 'bg-lime-600 text-white';
      case 'blue':
        return 'bg-blue-400 text-white';
      default:
        return 'bg-gray-200 text-white';
    }
  })();

  return (
    <div
      className={`font-pretendard w-fit text-xxs min-w-5 box-border py-1 px-2 rounded-lg text-center ${colorClass}`}
    >
      {text}
    </div>
  );
};

export default Tag;
