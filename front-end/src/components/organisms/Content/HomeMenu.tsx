import {Link} from 'react-router-dom';
import MainMenu from '@/components/atoms/Menu/MainMenu';

const menuItems = [
  {img: 'sketchBook', text: '알림장', to: ''},
  {img: 'megaphone', text: '공지사항', to: ''},
  {img: 'attendance', text: '출석부', to: ''},
  {img: 'book', text: '메모', to: ''},
  {img: 'riceBowl', text: '식단', to: ''},
  {img: 'medication', text: '투약의뢰서', to: ''},
  {img: 'house', text: '귀가동의서', to: ''},
  {img: 'bus', text: '스쿨버스', to: ''},
  {img: 'folder', text: '일지', to: ''},
  {img: 'imageGallery', text: '앨범', to: ''},
  {img: 'dinosaur', text: '반 관리', to: ''},
];

const HomeMenu = () => {
  return (
    <div className="flex justify-center bg-white rounded-lg">
      <div className="grid grid-cols-4 p-7 gap-x-7 gap-y-5">
        {/* 역할에 따라 보여주는 메뉴가 달라야 함 */}
        {menuItems.map((item, index) => (
          <Link to={item.to}>
            <MainMenu key={index} img={item.img} text={item.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
