import axiosInstance from '@/apis/axiosInstance';
import {PutAttendance} from '@/types/attendance/PutAttendance';

export const putAttendanceInfo = async (
  year: number,
  month: number,
  day: number,
  kidIds: number[],
  attendedToday: 'NOTHING' | 'ATTENDANCE' | 'ABSENCE',
  reason: string
) => {
  const body: PutAttendance = {
    year,
    month,
    day,
    kidIds,
    attendedToday,
    reason,
  };
  console.log(body);

  const result = await axiosInstance.put(`/attendances`, body);
  return result.data;
};
