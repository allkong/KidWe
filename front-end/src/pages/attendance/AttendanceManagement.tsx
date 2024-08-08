import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import Tabs from '@/components/organisms/Navigation/Tabs';
import AttendedKidsView from '@/components/organisms/Attendance/AttendedKidsView';
import NotAttendedKidsView from '@/components/organisms/Attendance/NotAttendedKidsView';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';

const AttendanceManagement = () => {
  const tabs = [
    {id: 0, label: '미처리', content: <NotAttendedKidsView />},
    {id: 1, label: '처리 완료', content: <AttendedKidsView />},
  ];

  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="출석" buttonType="close" />
      <DateNavigator title="7.16 (화)" />
      <Tabs tabs={tabs} />
      <NavigationBar />
    </div>
  );
};

export default AttendanceManagement;
