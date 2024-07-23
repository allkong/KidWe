import React from 'react';
import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';

const AttendanceTemplate: React.FC = () => {
  return (
    <div>
      <Header title="출석" buttonType="close" />
      <DateNavigator title="7.16 (화)" />
    </div>
  );
};

export default AttendanceTemplate;
