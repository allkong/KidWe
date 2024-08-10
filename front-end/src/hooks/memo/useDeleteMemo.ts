import {deleteMemo} from '@/apis/memo/deleteMemo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {memoKeys} from './memoKeys';

export const useDeleteMemo = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({teacherId, memoId}: {teacherId: number; memoId: string}) =>
      deleteMemo(teacherId, memoId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: memoKeys.all,
      });
    },
  });
  return result;
};
