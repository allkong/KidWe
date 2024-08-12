import dayjs from 'dayjs';
import AttendedKidsSelectView from '@/components/organisms/Attendance/AttendedKidsSelectView';
import AttendedKidsButtonView from '@/components/organisms/Attendance/AttendedKidsButtonView';
import {useEffect, useState} from 'react';
import {GetAttendance} from '@/types/attendance/GetAttendance';
import {useSearchParams} from 'react-router-dom';
import {getBanId} from '@/utils/userData';
import {useLoading} from '@/hooks/loading/useLoading';
import {useGetAttendanceInfo} from '@/hooks/attendance/useGetAttendanceInfo';

const AttendedKidsView = () => {
  const [searchParams] = useSearchParams();
  let date = dayjs(searchParams.get('date'));
  if (!date.isValid()) {
    date = dayjs();
  }

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
            date={date}
            onClickButton={handleClickSelectButton}
          />
        ) : (
          <AttendedKidsButtonView
            attendances={attendedKids}
            date={date}
            onClickButton={handleClickButtonButton}
          />
        )}
      </div>
    </>
  );
};

export default AttendedKidsView;
