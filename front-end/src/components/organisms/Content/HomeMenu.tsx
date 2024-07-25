import MainMenu from '@/components/atoms/Menu/MainMenu';

const menuItems = [
  {img: 'sketchBook', text: '알림장'},
  {img: 'megaphone', text: '공지사항'},
  {img: 'attendance', text: '출석부'},
  {img: 'book', text: '메모'},
  {img: 'riceBowl', text: '식단'},
  {img: 'medication', text: '투약의뢰서'},
  {img: 'house', text: '귀가동의서'},
  {img: 'bus', text: '스쿨버스'},
  {img: 'folder', text: '일지'},
  {img: 'imageGallery', text: '앨범'},
  {img: 'dinosaur', text: '반 관리'},
];

const HomeMenu = () => {
  return (
    <div className="flex justify-center bg-white rounded-lg">
      <div className="grid grid-cols-4 p-7 gap-x-7 gap-y-5">
        {/* 역할에 따라 보여주는 메뉴가 달라야 함 */}
        {menuItems.map((item, index) => (
          <MainMenu key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
