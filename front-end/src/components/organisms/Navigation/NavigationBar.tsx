import NavigationMenu from '@/components/atoms/Menu/NavigationMenu';
import homeIcon from '@/assets/icons/home-fill.svg';
import scheduleIcon from '@/assets/icons/calendar-fill.svg';
import mypageIcon from '@/assets/icons/baby-fill.svg';

const menuItems = [
  {src: homeIcon, alt: '홈', text: '홈', to: '/'},
  {src: scheduleIcon, alt: '일정', text: '일정', to: '/schedule'},
  {src: mypageIcon, alt: '마이', text: '마이', to: '/mypage'},
];

const NavigationBar = () => {
  return (
    <nav className="box-border fixed bottom-0 w-full py-2 text-base bg-white border-t text-gray-150 ">
      <div className="flex flex-row">
        {menuItems.map((item, index) => (
          <NavigationMenu
            key={index}
            src={item.src}
            alt={item.alt}
            text={item.text}
            to={item.to}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
