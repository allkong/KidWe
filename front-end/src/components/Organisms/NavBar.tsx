import React from 'react';
import ImageComponent from './../atoms/Icon';
const NavBar = () => {
  return (
    <div className="flex flex-row justify-around items-center font-pretendard  border-t border-gray-100 text-gray-100 text-base m-5">
      <ImageComponent
        src="/public/icons/home.png"
        alt="NoHome"
        text="홈"
      ></ImageComponent>
      <ImageComponent
        src="./public/icons/calender.png"
        alt="NoCalender"
        text="일정"
      ></ImageComponent>
      <ImageComponent
        src="/public/icons/mypage.png"
        alt="NoMypage"
        text="마이"
      ></ImageComponent>
    </div>
  );
};

export default NavBar;
