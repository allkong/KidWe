import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import Header from '@/components/organisms/Navigation/Header';
import {containerHeaderClass} from '@/styles/styles';
import UserInfo from '@/components/organisms/MyPage/UserInfo';
import MyPageItem from '@/components/organisms/MyPage/MyPageItem';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleUpdateInfoClick = () => {
    navigate('/mypage/update/user');
  };

  const handleKidUpdateClick = () => {
    navigate('/mypage/update/kid');
  };

  return (
    <div className={`${containerHeaderClass} w-screen h-screen`}>
      <Header title="마이 페이지" buttonType="close" />
      <div className="h-full overflow-y-auto bg-[#F8F8F8]">
        <div className="mb-2">
          <UserInfo name="루피" role="선생님" banName="여명유치원 햇님반" />
        </div>
        <div className="mb-2">
          <MyPageItem label="이름" content="루피" />
          <MyPageItem label="이메일" content="808@kidwe.com" />
          <MyPageItem label="개인정보 변경" onClick={handleUpdateInfoClick} />
          <MyPageItem label="자녀정보 변경" onClick={handleKidUpdateClick} />
        </div>
        <div>
          <MyPageItem label="로그인" onClick={handleLoginClick} />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Home;
