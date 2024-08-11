import axiosInstance from '@/apis/axiosInstance';
import type {Lesson} from '@/types/memo/Lesson';

/**
 *
 * @param banId
 * @param date YYYY-MM-DD
 * @returns
 */
export const getLessonInfomation = async (
  banId: number,
  date: string
): Promise<Lesson[]> => {
  const result = await axiosInstance.get(`/schedules/ban/${banId}/${date}`);
  return result.data;
};
