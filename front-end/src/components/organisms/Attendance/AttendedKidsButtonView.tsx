import {GetAttendance} from '@/types/attendance/GetAttendance';
import {Dayjs} from 'dayjs';
import XSmallButton from '@/components/atoms/Button/XSmallButton';
import Select from '@/components/molecules/DropdownButton/Select';
import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';
import {usePutAttendanceInfo} from '@/hooks/attendance/usePutAttendanceInfo';

interface AttendedKidsButtonViewProps {
  attendances?: GetAttendance[];
  onClickButton?: () => void;
  date?: Dayjs;
}

const banId = 1;

const AttendedKidsButtonView = ({
  attendances,
  onClickButton,
  date,
}: AttendedKidsButtonViewProps) => {
  const putMutate = usePutAttendanceInfo(banId);

  const handleSubmit = (kidId: number) => {
    if (date !== undefined) {
      putMutate.mutate({
        kidIds: [kidId],
        year: date.get('year'),
        month: date.get('month'),
        day: date.get('date'),
        attendedToday: 'NOTHING',
        reason: '',
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-2 border-b border-gray-200 min-h-14">
        <div>
          <Select label="반 이름" size="small">
            <Select.Option text="장미반" />
          </Select>
        </div>
        <XSmallButton
          label="선택"
          onClick={() => {
            onClickButton?.();
          }}
          variant="negative"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-fit">
        {attendances &&
          attendances.map(attendance => (
            <UserCardItemWithButton
              key={attendance.attendanceId}
              profile=""
              userName={attendance.kidName}
              negativeLabel="미처리"
              onClickNegative={() => {
                handleSubmit(attendance.kidId);
              }}
            />
          ))}
      </div>
    </>
  );
};

export default AttendedKidsButtonView;
