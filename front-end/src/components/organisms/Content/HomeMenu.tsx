import MainMenu from '@/components/atoms/Menu/MainMenu';

const HomeMenu = () => {
  return (
    <div className="flex justify-center bg-white rounded-lg">
      <div className="grid grid-cols-4 p-7 gap-x-7 gap-y-5">
        {/* 역할에 따라 보여주는 메뉴가 달라야 함 */}
        <MainMenu img="sketchBook" text="알림장" />
        <MainMenu img="megaphone" text="공지사항" />
        <MainMenu img="attendance" text="출석부" />
        <MainMenu img="book" text="메모" />
        <MainMenu img="riceBowl" text="식단" />
        <MainMenu img="medication" text="투약의뢰서" />
        <MainMenu img="house" text="귀가동의서" />
        <MainMenu img="bus" text="스쿨버스" />
        <MainMenu img="folder" text="일지" />
        <MainMenu img="imageGallery" text="앨범" />
        <MainMenu img="dinosaur" text="반 관리" />
      </div>
    </div>
  );
};

export default HomeMenu;
