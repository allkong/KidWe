import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postDailyNote} from '@/apis/daily-note/postDailyNote';

interface PostDailyNoteData {
  memberId: number;
  formData: FormData;
}

export const usePostDailyNote = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostDailyNoteData>({
    mutationFn: ({memberId, formData}) => postDailyNote(memberId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['dailyNoteList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
