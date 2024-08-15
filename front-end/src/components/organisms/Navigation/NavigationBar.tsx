import NavigationMenu from '@/components/atoms/Menu/NavigationMenu';
import homeIcon from '@/assets/icons/home-fill.svg?react';
import scheduleIcon from '@/assets/icons/calendar-fill.svg?react';
import mypageIcon from '@/assets/icons/baby-fill.svg?react';

const menuItems = [
  {Icon: homeIcon, alt: 'home icon', text: '홈', to: '/'},
  {Icon: scheduleIcon, alt: 'schedule icon', text: '일정', to: '/schedule'},
  {Icon: mypageIcon, alt: 'mypage icon', text: '마이', to: '/my-page'},
];

const NavigationBar = () => {
  return (
    <nav className="box-border fixed z-10 bottom-0 left-0 right-0 w-full max-w-full sm:max-w-[600px] mx-auto py-2 text-base bg-white border-t text-gray-150">
      <div className="flex flex-row">
        {menuItems.map((item, index) => (
          <NavigationMenu
            key={index}
            Icon={item.Icon}
            text={item.text}
            to={item.to}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
