import {deleteMemo} from '@/apis/memo/deleteMemo';
import {useMutation} from '@tanstack/react-query';

export const useDeleteMemo = () => {
  const result = useMutation({
    mutationFn: ({teacherId, memoId}: {teacherId: number; memoId: string}) =>
      deleteMemo(teacherId, memoId),
  });
  return result;
};
