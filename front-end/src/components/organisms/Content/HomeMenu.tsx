import {Link} from 'react-router-dom';
import {MENU_ITEMS} from '@/constants/home/menuItems';
import MainMenu from '@/components/atoms/Menu/MainMenu';

const HomeMenu = () => {
  return (
    <div className="flex justify-center bg-white rounded-lg">
      <div className="grid grid-cols-4 p-7 gap-x-7 gap-y-5">
        {/* 역할에 따라 보여주는 메뉴가 달라야 함 */}
        {MENU_ITEMS.map(item => (
          <Link key={item.id} to={item.to}>
            <MainMenu key={item.id} img={item.img} text={item.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
