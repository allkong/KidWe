import React from 'react';
import {getImage, getColor} from '@/util/getMainImage';

interface MainMenuProps {
  img: string;
  text: string;
}

const MainMenu = ({img, text}: MainMenuProps) => {
  return (
    <div className="flex flex-col items-center w-fit h-fit ">
      <div
        className={`${getColor(img)} p-2 mb-1 w-12 h-12 flex justify-center items-center rounded-2xl`}
      >
        <img src={getImage(img)} width="32" />
      </div>
      <p className="text-xs font-semibold text-gray-300 font-pretendard">
        {text}
      </p>
    </div>
  );
};

export default MainMenu;
