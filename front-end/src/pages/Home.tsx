import NotificationButton from '@/components/atoms/Button/NotificationButton';
import KindergartenCard from '@/components/atoms/KindergartenCard';
import UsercardItem from '@/components/molecules/Item/UserCardItem';
import HomeMenu from '@/components/organisms/Content/HomeMenu';
import MemoShortcut from '@/components/organisms/Content/MemoShortcut';

const Home = () => {
  const userInfo = {
    profile:
      'https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG',
    userName: '강혁준',
    role: '선생님',
  };

  return (
    <div className="min-h-screen px-5 space-y-3 bg-secondary">
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
        <UsercardItem
          profile={userInfo.profile}
          userName={`${userInfo.userName} ${userInfo.role}`}
          cardType="arrow"
        />
      </div>
      {/* 메뉴 카드 */}
      <div>
        <HomeMenu />
      </div>
      {/* 메모 카드 */}
      <div>
        <MemoShortcut />
      </div>
    </div>
  );
};

export default Home;
