import axiosInstance from '@/apis/noSqlInstance';

export const deleteMemo = async (teacherId: number, memoId: string) => {
  const result = await axiosInstance.delete(`/memos/${teacherId}/${memoId}`);
  return result.data;
};
