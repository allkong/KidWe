import NavigationMenu from '@/components/atoms/Menu/NavigationMenu';
import homeIcon from '@/assets/icons/home-fill.svg';
import scheduleIcon from '@/assets/icons/calendar-fill.svg';
import mypageIcon from '@/assets/icons/baby-fill.svg';

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 w-full py-5 text-base text-gray-100 border-t border-gray-100">
      <div className="flex flex-row ">
        <NavigationMenu
          src={homeIcon}
          alt=""
          text="홈"
          width={26}
        ></NavigationMenu>
        <NavigationMenu
          src={scheduleIcon}
          alt=""
          text="일정"
          width={26}
        ></NavigationMenu>
        <NavigationMenu
          src={mypageIcon}
          alt=""
          text="마이"
          width={26}
        ></NavigationMenu>
      </div>
    </nav>
  );
};

export default NavigationBar;
