import {postMemo} from '@/apis/memo/postMemo';
import {PostMemo} from '@/types/memo/PostMemo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {memoKeys} from '@/hooks/memo/memoKeys';
import dayjs from 'dayjs';

export const useWriteDailyMemo = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({teacherId, memo}: {teacherId: number; memo: PostMemo}) => {
      return postMemo(teacherId, memo);
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
