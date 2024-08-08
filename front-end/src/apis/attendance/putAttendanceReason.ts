import axiosInstance from '@/apis/axiosInstance';
import type {PutReason} from '@/types/attendance/PutReason';

export const putAttendanceReason = async (
  kidId: number,
  year: number,
  month: number,
  day: number,
  reason: string
) => {
  try {
    const body: PutReason = {kidId, year, month, day, reason};
    const result = await axiosInstance.put(`/attendances/reason`, body);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
