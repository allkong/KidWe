import NotAttendedKidsButtonView from '@/components/organisms/Attendance/NotAttendedKidsButtonView';
import NotAttendedKidsSelectView from '@/components/organisms/Attendance/NotAttendedKidsSelectView';
import {GetAttendance} from '@/types/attendance/GetAttendance';
import {Dayjs} from 'dayjs';
import {useState} from 'react';

interface AttendedKidsViewProps {
  date: Dayjs;
}

const data: GetAttendance[] = [
  {
    attendanceId: 1,
    attendedToday: 'NOTHING',
    banId: 1,
    banName: '장미반',
    date: '2024-08-08',
    kidId: 1,
    kidName: '강감찬',
    reason: '',
  },
  {
    attendanceId: 2,
    attendedToday: 'ATTENDANCE',
    banId: 1,
    banName: '장미반',
    date: '2024-08-08',
    kidId: 2,
    kidName: '이순신',
    reason: '',
  },
  {
    attendanceId: 3,
    attendedToday: 'ABSENCE',
    banId: 2,
    banName: '백합반',
    date: '2024-08-08',
    kidId: 3,
    kidName: '홍길동',
    reason: '병원 방문',
  },
  {
    attendanceId: 4,
    attendedToday: 'NOTHING',
    banId: 1,
    banName: '장미반',
    date: '2024-08-08',
    kidId: 4,
    kidName: '유관순',
    reason: '지각',
  },
  {
    attendanceId: 5,
    attendedToday: 'NOTHING',
    banId: 3,
    banName: '해바라기반',
    date: '2024-08-08',
    kidId: 5,
    kidName: '안중근',
    reason: '',
  },
  {
    attendanceId: 6,
    attendedToday: 'ATTENDANCE',
    banId: 2,
    banName: '백합반',
    date: '2024-08-08',
    kidId: 6,
    kidName: '신사임당',
    reason: '',
  },
];

const AttendedKidsView = ({date}: AttendedKidsViewProps) => {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [absenceKids] = useState(
    data.filter(value => value.attendedToday === 'NOTHING')
  );
  // const {data, refetch} = useGetAttendanceInfo(
  //   banId,
  //   date.get('year'),
  //   date.get('month') + 1,
  //   date.get('date')
  // );

  // useEffect(() => {
  //   refetch();
  // }, [date, refetch]);

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
