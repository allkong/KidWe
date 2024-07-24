import NotificationButton from '@/components/atoms/Button/NotificationButton';
import KindergartenCard from '@/components/atoms/KindergartenCard';
import UsercardItem from '@/components/molecules/Item/UserCardItem';
import HomeMenu from '@/components/organisms/Content/HomeMenu';

const Home = () => {
  return (
    <div className="min-h-screen px-5 space-y-4 bg-secondary">
      <div className="flex justify-between pt-5">
        {/* 서비스명 & 로고 */}
        <div></div>
        {/* 알림 버튼 */}
        <NotificationButton />
      </div>
      {/* 유치원 정보 */}
      <div className="">
        <KindergartenCard kindergartenName="싸피 유치원" />
      </div>
      {/* 사용자 카드 */}
      <div>
        <UsercardItem profile="" userName="강혁준 선생님" cardType="arrow" />
      </div>
      {/* 메뉴 카드 */}
      <div>
        <HomeMenu />
      </div>
      {/* 메모 카드 */}
      <div></div>
    </div>
  );
};

export default Home;
