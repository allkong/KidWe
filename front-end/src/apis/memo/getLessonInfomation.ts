import axiosInstance from '@/apis/axiosInstance';
import {Dayjs} from 'dayjs';
import type {Lesson} from '@/types/memo/Lesson';

export const getLessonInfomation = async (
  banId: number,
  date: Dayjs
): Promise<Lesson[]> => {
  try {
    const result = await axiosInstance.get(
      `/schedules/ban/${banId}/${date.format('YYYY-MM-DD')}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
