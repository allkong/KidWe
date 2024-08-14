import {useMutation} from '@tanstack/react-query';
import {deleteDailyNote} from '@/apis/daily-note/deleteDailyNote';

export const useDeleteDailyNote = () => {
  return useMutation<void, Error, {memberId: number; dailyNoteId: string}>({
    mutationFn: deleteDailyNote,
    onSuccess: () => {},
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
