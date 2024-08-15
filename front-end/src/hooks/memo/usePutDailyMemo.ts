import {PostMemo} from '@/types/memo/PostMemo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {memoKeys} from '@/hooks/memo/memoKeys';
import {putMemo} from '@/apis/memo/putMemo';

export const usePutDailyMemo = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({
      teacherId,
      memoId,
      memo,
    }: {
      teacherId: number;
      memoId: string;
      memo: PostMemo;
    }) => {
      return putMemo(teacherId, memoId, memo);
    },
    onError(error) {
      throw error;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: memoKeys.all,
      });
    },
  });
  return result;
};
