import axiosInstance from '@/apis/axiosInstance';
import {GetSchedule} from '@/types/schedule/GetSchedule';

export const getAllSchedules = async (
  kindergartenId: number,
  date: string
): Promise<GetSchedule[]> => {
  const result = await axiosInstance.get(
    `/schedules/all/${kindergartenId}/${date}`
  );
  return result.data;
};
