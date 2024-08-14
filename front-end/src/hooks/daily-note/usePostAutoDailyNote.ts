import {useMutation} from '@tanstack/react-query';
import {postAutoDailyNote} from '@/apis/daily-note/postAutoDailyNote';
import type {TeacherOfMemoInfo} from '@/types/daily-note/TeacherOfMemoInfo';

interface PostAutoDailyNoteData {
  teacherId: number;
  memoInfo: TeacherOfMemoInfo;
}

export const usePostAutoDailyNote = (
  onSuccessCallback: (response: string) => void
) => {
  return useMutation<string, Error, PostAutoDailyNoteData>({
    mutationFn: ({teacherId, memoInfo}) =>
      postAutoDailyNote(teacherId, memoInfo),
    onSuccess: data => {
      onSuccessCallback(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
