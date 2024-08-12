import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
import Tabs from '@/components/organisms/Navigation/Tabs';
import BanTeacherPendingView from '@/components/organisms/Ban/BanTeacherPendingView';
import BanTeacherAcceptView from '@/components/organisms/Ban/BanTeacherAcceptView';
const ChildManagement = () => {
  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="원생 관리" buttonType="back" />
      <Tabs
        tabs={[
          {
            id: 0,
            label: '승인된 아이',
            content: <BanTeacherAcceptView />, // 아이 중에서 ACCEPT 된 사람
          },
          {
            id: 1,
            label: '대기중인 아이',
            content: <BanTeacherPendingView />, // 아이 중에서 PENDING 인사람
          },
        ]}
      />
      <NavigationBar />
    </div>
  );
};

export default ChildManagement;
