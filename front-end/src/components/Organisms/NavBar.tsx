import React from 'react';
import Icon from '@/components/atoms/Icon';
const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full pt-2 text-base text-gray-100 border-t border-gray-100">
      <div className="flex flex-row ">
        <Icon
          src="/public/icons/home.png"
          alt="NoHome"
          text="홈"
          width={30}
        ></Icon>
        <Icon
          src="./public/icons/calender.png"
          alt="NoCalender"
          text="일정"
          width={30}
        ></Icon>
        <Icon
          src="/public/icons/mypage.png"
          alt="NoMypage"
          text="마이"
          width={30}
        ></Icon>
      </div>
    </nav>
  );
};

export default NavBar;
