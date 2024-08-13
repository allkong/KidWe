import MyPageItem from '@/components/organisms/MyPage/MyPageItem';
import {deleteAccessToken} from '@/utils/userAccessToken';
import {deleteRefreshToken} from '@/utils/userRefreshToken';
import {useNavigate} from 'react-router-dom';

const LoginMenu = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth/login');
  };

  const handleLogoutClick = () => {
    deleteAccessToken();
    deleteRefreshToken();
    navigate('/auth/login');
  };

  return (
    <div className="mb-2">
      <MyPageItem label="로그인" onClick={handleLoginClick} />
      <MyPageItem label="로그아웃" onClick={handleLogoutClick} />
    </div>
  );
};

export default LoginMenu;
