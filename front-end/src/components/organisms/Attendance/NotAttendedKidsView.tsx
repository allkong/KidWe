import AttendedKidsButtonView from '@/components/organisms/Attendance/NotAttendedKidsButtonView';
import AttendedKidsSelectView from '@/components/organisms/Attendance/NotAttendedKidsSelectView';
import {useState} from 'react';

const AttendedKidsView = () => {
  const [isShowSelect, setIsShowSelect] = useState(false);

  const value = Array.from({length: 10}, () => '');

  const handleClickSelectButton = () => {
    setIsShowSelect(true);
  };

  const handleClickButtonButton = () => {
    setIsShowSelect(false);
  };

  return (
    <div>
      {isShowSelect ? (
        <AttendedKidsSelectView
          value={value}
          onClickButton={handleClickButtonButton}
        />
      ) : (
        <AttendedKidsButtonView
          value={value}
          onClickSelect={handleClickSelectButton}
        />
      )}
    </div>
  );
};

export default AttendedKidsView;
