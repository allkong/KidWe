import MyPageItem from '@/components/organisms/MyPage/MyPageItem';
import {useNavigate} from 'react-router-dom';

const GuardianMenu = () => {
  const navigate = useNavigate();

  const handleKidUpdateClick = () => {
    navigate('kid/update');
  };

  return (
    <div className="mb-2">
      <MyPageItem
        label="현재 자녀 정보 변경"
        content="행식이"
        onClick={handleKidUpdateClick}
      />
      <MyPageItem
        label="현재 자녀 유치원 이동"
        content="춘식이"
        onClick={() => {}}
      />
      <MyPageItem label="자녀 추가" onClick={() => {}} />
    </div>
  );
};

export default GuardianMenu;
