import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';

const BanManagement = () => {
  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="반 관리" buttonType="back" />

      <NavigationBar />
    </div>
  );
};

export default BanManagement;
