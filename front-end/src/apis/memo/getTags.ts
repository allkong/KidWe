import axiosInstance from '@/apis/noSqlInstance';
import {Tag} from '@/types/memo/Tag';

export const getTags = async (teacherId: number): Promise<Tag[]> => {
  try {
    const result = await axiosInstance.get(`/tag/${teacherId}`);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
