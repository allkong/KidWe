import {getTeacherDailyMemos} from '@/apis/memo/getTeacherDailyMemos';
import {useQuery} from '@tanstack/react-query';
import type {GetMemo} from '@/types/memo/GetMemo';
import {memoKeys} from '@/hooks/memo/memoKeys';

export const useGetDailyMemo = (
  teacherId: number,
  year: string,
  month: string,
  date: string
) => {
  const result = useQuery<GetMemo[]>({
    queryKey: memoKeys.lists(teacherId, year, month, date),
    queryFn: () => getTeacherDailyMemos(teacherId, year, month, date),
  });
  return result;
};
