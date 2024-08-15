import {useMutation} from '@tanstack/react-query';
import {deleteDailyNoteComment} from '@/apis/daily-note/deleteDailyNoteComment';

export const useDeleteDailyNoteComment = () => {
  return useMutation<
    void,
    Error,
    {memberId: number; dailyNoteId: number; dailyNoteCommentId: number}
  >({
    mutationFn: deleteDailyNoteComment,
    onSuccess: () => {},
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
