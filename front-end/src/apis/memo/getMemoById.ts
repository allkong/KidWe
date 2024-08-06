import axiosInstance from '@/apis/noSqlInstance';
import {Memo} from '@/types/memo/Memo';

export const getMemoById = async (
  teacherId: number,
  memoId: string
): Promise<Memo> => {
  try {
    const result = await axiosInstance.get(`/memo/${teacherId}/${memoId}`);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
