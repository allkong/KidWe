import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import Header from '@/components/organisms/Navigation/Header';
import {containerHeaderClass} from '@/styles/styles';
import UserInfo from '@/components/organisms/MyPage/UserInfo';
import CommonMenu from '@/components/organisms/MyPage/CommonMenu';
import GuardianMenu from '@/components/organisms/MyPage/GuardianMenu';
import LoginMenu from '@/components/organisms/MyPage/LoginMenu';

const Home = () => {
  return (
    <div className={`${containerHeaderClass} h-screen`}>
      <Header title="마이 페이지" />
      <div className="h-full overflow-y-auto bg-[#F8F8F8]">
        <UserInfo />
        <CommonMenu />
        <GuardianMenu />
        <LoginMenu />
      </div>
      <NavigationBar />
    </div>
  );
};

export default Home;
