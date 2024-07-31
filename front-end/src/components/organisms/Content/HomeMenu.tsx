import {Link} from 'react-router-dom';
import MainMenu from '@/components/atoms/Menu/MainMenu';

const menuItems = [
  {id: 1, img: 'sketchBook', text: '알림장', to: ''},
  {id: 2, img: 'megaphone', text: '공지사항', to: ''},
  {id: 3, img: 'attendance', text: '출석부', to: ''},
  {id: 4, img: 'book', text: '메모', to: ''},
  {id: 5, img: 'riceBowl', text: '식단', to: ''},
  {id: 6, img: 'medication', text: '투약의뢰서', to: '/medication'},
  {id: 7, img: 'house', text: '귀가동의서', to: ''},
  {id: 8, img: 'bus', text: '스쿨버스', to: ''},
  {id: 9, img: 'folder', text: '일지', to: ''},
  {id: 10, img: 'imageGallery', text: '앨범', to: ''},
  {id: 11, img: 'dinosaur', text: '반 관리', to: ''},
];

const HomeMenu = () => {
  return (
    <div className="flex justify-center bg-white rounded-lg">
      <div className="grid grid-cols-4 p-7 gap-x-7 gap-y-5">
        {/* 역할에 따라 보여주는 메뉴가 달라야 함 */}
        {menuItems.map(item => (
          <Link key={item.id} to={item.to}>
            <MainMenu key={item.id} img={item.img} text={item.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
