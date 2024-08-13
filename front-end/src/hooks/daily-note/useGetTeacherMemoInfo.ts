import {useQuery} from '@tanstack/react-query';
import {getTeacherMemoInfo} from '@/apis/daily-note/getTeacherMemoInfo';
import {TeacherOfMemoInfo} from '@/types/daily-note/TeacherOfMemoInfo';

export const useGetTeacherMemoInfo = (teacherId: number, kidId: number) => {
  return useQuery<TeacherOfMemoInfo, Error>({
    queryKey: ['dailyNoteDetail', kidId],
    queryFn: () => {
      return getTeacherMemoInfo(teacherId, kidId);
    },
  });
};
