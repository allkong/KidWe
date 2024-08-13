import NotAttendedKidsButtonView from '@/components/organisms/Attendance/NotAttendedKidsButtonView';
import NotAttendedKidsSelectView from '@/components/organisms/Attendance/NotAttendedKidsSelectView';
import {useGetAttendanceInfo} from '@/hooks/attendance/useGetAttendanceInfo';
// import {useGetAttendanceInfoHook} from '@/hooks/attendance/useGetAttendanceInfoHook';
import {GetAttendance} from '@/types/attendance/GetAttendance';
import {useEffect, useState} from 'react';
import {useLoading} from '@/hooks/loading/useLoading';
import {getBanId} from '@/utils/userData';
import {useGetDateBySearchParam} from '@/hooks/useGetDateBySearchParam';

const AttendedKidsView = () => {
  const date = useGetDateBySearchParam();

  const [isShowSelect, setIsShowSelect] = useState(false);
  const {data, isLoading} = useGetAttendanceInfo(
    getBanId()!,
    date.get('year'),
    date.get('month') + 1,
    date.get('date')
  );
  useLoading(isLoading);

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
            onClickButton={handleClickButtonButton}
          />
        ) : (
          <NotAttendedKidsButtonView
            attendances={absenceKids}
            onClickSelect={handleClickSelectButton}
          />
        )}
      </div>
    </>
  );
};

export default AttendedKidsView;
