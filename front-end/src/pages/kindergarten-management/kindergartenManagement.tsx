import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
const KindergartenManagement = () => {
  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="유치원 설정" buttonType="back" />

      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
