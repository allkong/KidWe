import {getLessonInfomation} from '@/apis/memo/getLessonInfomation';
import {useQuery} from '@tanstack/react-query';
import type {Lesson} from '@/types/memo/Lesson';
import {memoKeys} from '@/hooks/memo/memoKeys';

/**
 *
 * @param banId
 * @param date YYYY-MM-DD
 * @returns
 */
export const useGetLessonInfomation = (banId: number, date: string) => {
  const result = useQuery<Lesson[]>({
    queryKey: memoKeys.lessons(banId, date),
    queryFn: () => getLessonInfomation(banId, date),
  });
  return result;
};
