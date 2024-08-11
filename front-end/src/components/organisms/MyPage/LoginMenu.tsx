import MyPageItem from '@/components/organisms/MyPage/MyPageItem';
import {deleteToken} from '@/utils/userToken';
import {useNavigate} from 'react-router-dom';

const LoginMenu = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    deleteToken();
    navigate('/login');
  };

  return (
    <div className="mb-2">
      <MyPageItem label="로그인" onClick={handleLoginClick} />
      <MyPageItem label="로그아웃" onClick={handleLogoutClick} />
    </div>
  );
};

export default LoginMenu;
