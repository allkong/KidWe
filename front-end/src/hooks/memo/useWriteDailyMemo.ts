import {postMemo} from '@/apis/memo/postMemo';
import {Memo} from '@/types/memo/Memo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {memoKeys} from '@/hooks/memo/memoKeys';

export const useWriteDailyMemo = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({teacherId, memo}: {teacherId: number; memo: Memo}) => {
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
          updatedTime.format('YYYY'),
          updatedTime.format('MM'),
          updatedTime.format('DD')
        ),
      });
    },
  });
  return result;
};
