import {getMemoById} from '@/apis/memo/getMemoById';
import {useQuery} from '@tanstack/react-query';
import {GetMemo} from '@/types/memo/GetMemo';
import {memoKeys} from '@/hooks/memo/memoKeys';

export const useGetDailyMemoById = (
  teacherId: number,
  memoId: string | undefined | null
) => {
  const result = useQuery<GetMemo>({
    queryKey: memoKeys.detail(teacherId, memoId),
    queryFn: () => {
      return getMemoById(teacherId, memoId!);
    },
    enabled: !!memoId,
    retry: 0,
  });
  return result;
};
