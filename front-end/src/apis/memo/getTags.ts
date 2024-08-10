import axiosInstance from '@/apis/noSqlInstance';
import type {Tag} from '@/types/memo/Tag';

export const getTags = async (teacherId: number): Promise<Tag[]> => {
  const result = await axiosInstance.get(`/tag/${teacherId}`);
  return result.data;
};
