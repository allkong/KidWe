import AttendedKidsSelectView from '@/components/organisms/Attendance/AttendedKidsSelectView';
import AttendedKidsButtonView from '@/components/organisms/Attendance/AttendedKidsButtonView';
import {useEffect, useState} from 'react';
import {GetAttendance} from '@/types/attendance/GetAttendance';
import {getBanId} from '@/utils/userData';
import {useLoading} from '@/hooks/loading/useLoading';
import {useGetAttendanceInfo} from '@/hooks/attendance/useGetAttendanceInfo';
import {useGetDateBySearchParam} from '@/hooks/useGetDateBySearchParam';

const AttendedKidsView = () => {
  const date = useGetDateBySearchParam();

  const [isShowSelect, setIsShowSelect] = useState(false);
  const {data, refetch, isLoading} = useGetAttendanceInfo(
    getBanId()!,
    date.get('year'),
    date.get('month') + 1,
    date.get('date')
  );
  useLoading(isLoading);

  useEffect(() => {
    refetch();
  }, [date, refetch]);

  const [attendedKids, setAttendedKids] = useState<GetAttendance[]>();

  useEffect(() => {
    setAttendedKids(
      data?.filter(
        value =>
          value.attendedToday === 'ABSENCE' ||
          value.attendedToday === 'ATTENDANCE'
      )
    );
  }, [data]);

  const handleClickSelectButton = () => {
    setIsShowSelect(false);
  };

  const handleClickButtonButton = () => {
    setIsShowSelect(true);
  };

  return (
    <>
      {/* {isLoading && <Spinner />} */}
      <div>
        {isShowSelect ? (
          <AttendedKidsSelectView
            attendances={attendedKids}
            onClickButton={handleClickSelectButton}
          />
        ) : (
          <AttendedKidsButtonView
            attendances={attendedKids}
            onClickButton={handleClickButtonButton}
          />
        )}
      </div>
    </>
  );
};

export default AttendedKidsView;
