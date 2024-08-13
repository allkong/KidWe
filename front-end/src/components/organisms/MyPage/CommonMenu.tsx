import MyPageItem from '@/components/organisms/MyPage/MyPageItem';
import {useGetUserInfo} from '@/hooks/my-page/useGetUserInfo';
import {useNavigate} from 'react-router-dom';

const userId = 1;

const CommonMenu = () => {
  const {data} = useGetUserInfo(userId);

  const navigate = useNavigate();

  const handleUpdateInfoClick = () => {
    navigate('/my-page/update/user');
  };

  return (
    <div className="mb-2">
      <MyPageItem label="이름" content={data?.name} />
      <MyPageItem label="이메일" content={data?.email} />
      <MyPageItem label="개인정보 변경" onClick={handleUpdateInfoClick} />
    </div>
  );
};

export default CommonMenu;
