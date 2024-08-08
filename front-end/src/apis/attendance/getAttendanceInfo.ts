import axiosInstance from '@/apis/axiosInstance';
import type {Attendance} from '@/types/attendance/Attendance';

export const getAttendanceInfo = async (
  banId: number,
  year: number,
  month: number,
  day: number
): Promise<Attendance[]> => {
  try {
    const result = await axiosInstance.get(
      `/attendances/${banId}/${year}/${month}/${day}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
