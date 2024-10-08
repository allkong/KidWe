import axiosInstance from '@/apis/noSqlInstance';
import {GetMemo} from '@/types/memo/GetMemo';

export const getMemoById = async (
  teacherId: number,
  memoId: string
): Promise<GetMemo> => {
  const result = await axiosInstance.get(`/memos/${teacherId}/${memoId}`);
  return result.data;
};
