import {PostMemo} from '@/types/memo/PostMemo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {memoKeys} from '@/hooks/memo/memoKeys';
import dayjs from 'dayjs';
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
    onSuccess(_, {teacherId, memo}) {
      const {updatedTime} = memo;
      queryClient.invalidateQueries({
        queryKey: memoKeys.lists(
          teacherId,
          dayjs(updatedTime).format('YYYY'),
          dayjs(updatedTime).format('MM'),
          dayjs(updatedTime).format('DD')
        ),
      });
    },
  });
  return result;
};
