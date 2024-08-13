import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
import Button from '@/components/atoms/Button/Button';

const BanManagement = () => {
  const handleAddBan = () => {};
  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="반 관리" buttonType="back" />
      <div>
        <p>반 이름 + 원생 몇 명 + 교사 몇 명 + : (수정할게있나)</p>
        <Button label="+ 반 추가하기" onClick={handleAddBan}></Button>
      </div>
      <NavigationBar />
    </div>
  );
};

export default BanManagement;
