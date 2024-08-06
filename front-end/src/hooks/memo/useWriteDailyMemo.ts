import {postMemo} from '@/apis/memo/postMemo';
import {Memo} from '@/types/memo/Memo';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export const useWriteDailyMemo = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({teacherId, memo}: {teacherId: number; memo: Memo}) => {
      return postMemo(teacherId, memo);
    },
    onError(error) {
      throw error;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['memos', 1],
      });
    },
  });
  return result;
};
