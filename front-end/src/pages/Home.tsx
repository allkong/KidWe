import {useNavigate} from 'react-router-dom';
import NotificationButton from '@/components/atoms/Button/NotificationButton';
import KindergartenCard from '@/components/atoms/KindergartenCard';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import HomeMenu from '@/components/organisms/Content/HomeMenu';
import MemoShortcut from '@/components/organisms/Content/MemoShortcut';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const Home = () => {
  const userInfo = {
    profile:
      'https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG',
    userName: '강혁준',
    role: '선생님',
    kindergartenName: '싸피 유치원',
  };

  const navigate = useNavigate();
  const handleUserCardItemClick = () => {
    navigate('/my-page');
  };

  return (
    <>
      <div className="min-h-screen px-5 space-y-3 border-t pb-[8rem] bg-secondary">
        <div className="flex justify-between pt-7">
          {/* 서비스명 & 로고 */}
          <div></div>
          <NotificationButton />
        </div>
        <div className="">
          <KindergartenCard kindergartenName={userInfo.kindergartenName} />
        </div>
        <div onClick={handleUserCardItemClick}>
          <UserCardItem
            profile={userInfo.profile}
            userName={`${userInfo.userName} ${userInfo.role}`}
            cardType="arrow"
          />
        </div>
        <HomeMenu />
        <MemoShortcut />
      </div>
      <NavigationBar />
    </>
  );
};

export default Home;
