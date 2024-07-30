import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import Tabs from '@/components/organisms/Navigation/Tabs';

const AttendanceManagement = () => {
  const tabs = [
    {id: 0, label: '미처리', content: <div>학생들</div>},
    {id: 1, label: '처리 완료', content: <div>학생들2</div>},
  ];

  return (
    <div>
      <Header title="출석" buttonType="close" />
      <DateNavigator title="7.16 (화)" />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default AttendanceManagement;
