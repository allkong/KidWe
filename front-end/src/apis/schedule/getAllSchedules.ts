import axiosInstance from '@/apis/axiosInstance';
import {GetSchedule} from '@/types/schedule/GetSchedule';
import {Dayjs} from 'dayjs';

export const getAllSchedules = async (
  kindergartenId: number,
  date: Dayjs
): Promise<GetSchedule[]> => {
  try {
    const result = await axiosInstance.get(
      `/schedules/all/${kindergartenId}/${date.format('YYYY-MM-DD')}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
