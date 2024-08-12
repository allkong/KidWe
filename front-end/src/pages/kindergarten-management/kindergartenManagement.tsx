import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
const KindergartenManagement = () => {
  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="유치원 설정" buttonType="back" />
      <div>
        <p>유치원 이름, 원장님 이름</p>
        <p>원위치 City, District , 상세주소</p>
        <p>/kindergartens/kindergartenId 로 하면 됨</p>
      </div>
      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
