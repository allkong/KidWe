import {getAttendanceInfo} from '@/apis/attendance/getAttendanceInfo';
import {Attendance} from '@/types/attendance/Attendance';
import {useQuery} from '@tanstack/react-query';
import {attendanceKeys} from '@/hooks/attendance/attendanceKeys';

export const useGetAttendanceInfo = (
  banId: number,
  year: number,
  month: number,
  date: number
) => {
  const result = useQuery<Attendance[]>({
    queryKey: attendanceKeys.lists(banId, year, month, date),
    queryFn: () => getAttendanceInfo(banId, year, month, date),
  });
  return result;
};
