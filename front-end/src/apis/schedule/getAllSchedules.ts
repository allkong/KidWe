import axiosInstance from '@/apis/axiosInstance';
import {GetSchedule} from '@/types/schedule/GetSchedule';

export const getAllSchedules = async (
  kindergartenId: number,
  date: string
): Promise<GetSchedule[]> => {
  try {
    const result = await axiosInstance.get(
      `/schedules/all/${kindergartenId}/${date}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
