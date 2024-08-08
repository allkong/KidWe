import AttendedKidsButtonView from '@/components/organisms/Attendance/NotAttendedKidsButtonView';
import AttendedKidsSelectView from '@/components/organisms/Attendance/NotAttendedKidsSelectView';
import {Dayjs} from 'dayjs';
import {useEffect, useState} from 'react';
import {useGetAttendanceInfo} from '@/hooks/attendance/useGetAttendanceInfo';

const banId = 1;

interface AttendedKidsViewProps {
  date: Dayjs;
}

const AttendedKidsView = ({date}: AttendedKidsViewProps) => {
  const [isShowSelect, setIsShowSelect] = useState(false);

  const {data, refetch} = useGetAttendanceInfo(
    banId,
    date.get('year'),
    date.get('month') + 1,
    date.get('date')
  );

  useEffect(() => {
    refetch();
  }, [date, refetch]);

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
          attendances={data}
          onClickButton={handleClickButtonButton}
        />
      ) : (
        <AttendedKidsButtonView
          attendances={data}
          onClickSelect={handleClickSelectButton}
        />
      )}
    </div>
  );
};

export default AttendedKidsView;
