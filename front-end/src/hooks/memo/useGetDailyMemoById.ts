import {getMemoById} from '@/apis/memo/getMemoById';
import {useQuery} from '@tanstack/react-query';
import {Memo} from '@/types/memo/Memo';
import {memoKeys} from '@/hooks/memo/memoKeys';

export const useGetDailyMemoById = (
  teacherId: number,
  memoId: string | undefined | null
) => {
  const result = useQuery<Memo>({
    queryKey: memoKeys.detail(teacherId, memoId),
    queryFn: () => {
      return getMemoById(teacherId, memoId!);
    },
    enabled: !!memoId,
  });
  return result;
};
