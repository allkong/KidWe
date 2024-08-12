import NotAttendedKidsButtonView from '@/components/organisms/Attendance/NotAttendedKidsButtonView';
import NotAttendedKidsSelectView from '@/components/organisms/Attendance/NotAttendedKidsSelectView';
import {useGetAttendanceInfo} from '@/hooks/attendance/useGetAttendanceInfo';
// import {useGetAttendanceInfoHook} from '@/hooks/attendance/useGetAttendanceInfoHook';
import {GetAttendance} from '@/types/attendance/GetAttendance';
import dayjs from 'dayjs';
import {useEffect, useState} from 'react';
import {useLoading} from '@/hooks/loading/useLoading';
import {useSearchParams} from 'react-router-dom';
import {getBanId} from '@/utils/userData';

const AttendedKidsView = () => {
  const [searchParams] = useSearchParams();
  const date = dayjs(searchParams.get('date'));

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

  const [absenceKids, setAbsenceKids] = useState<GetAttendance[]>();

  useEffect(() => {
    setAbsenceKids(data?.filter(val => val.attendedToday === 'NOTHING'));
  }, [data]);

  const handleClickSelectButton = () => {
    setIsShowSelect(true);
  };

  const handleClickButtonButton = () => {
    setIsShowSelect(false);
  };

  return (
    <>
      {/* {isLoading && <Spinner />} */}
      <div>
        {isShowSelect ? (
          <NotAttendedKidsSelectView
            attendances={absenceKids}
            date={date}
            onClickButton={handleClickButtonButton}
          />
        ) : (
          <NotAttendedKidsButtonView
            attendances={absenceKids}
            date={date}
            onClickSelect={handleClickSelectButton}
          />
        )}
      </div>
    </>
  );
};

export default AttendedKidsView;
