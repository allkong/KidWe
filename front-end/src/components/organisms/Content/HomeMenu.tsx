import {Link} from 'react-router-dom';
import MainMenu from '@/components/atoms/Menu/MainMenu';
import {getMenuItem} from '@/utils/getMenuItem';
import {getMemberRole} from '@/utils/userData';

const HomeMenu = () => {
  const menus = getMenuItem(getMemberRole()!);

  return (
    <div className="flex justify-center bg-white rounded-lg">
      <div className="grid grid-cols-4 p-7 gap-x-7 gap-y-5">
        {menus.map(item => (
          <Link key={item.id} to={item.to}>
            <MainMenu key={item.id} img={item.img} text={item.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
