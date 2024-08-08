import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import Tabs from '@/components/organisms/Navigation/Tabs';
import AttendedKidsView from '@/components/organisms/Attendance/AttendedKidsView';
import NotAttendedKidsView from '@/components/organisms/Attendance/NotAttendedKidsView';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
import {useState} from 'react';
import dayjs from 'dayjs';

const AttendanceManagement = () => {
  const [date, setDate] = useState(dayjs());

  const handleLeftClick = () => {
    setDate(date.subtract(1, 'day'));
  };

  const handleRightClick = () => {
    setDate(date.add(1, 'day'));
  };

  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="출석" buttonType="close" />
      <DateNavigator
        title={date.format('M.D (ddd)')}
        onClickLeft={handleLeftClick}
        onClickRight={handleRightClick}
      />
      <Tabs
        tabs={[
          {
            id: 0,
            label: '미처리',
            content: <NotAttendedKidsView date={date} />,
          },
          {
            id: 1,
            label: '처리 완료',
            content: <AttendedKidsView date={date} />,
          },
        ]}
      />
      <NavigationBar />
    </div>
  );
};

export default AttendanceManagement;
