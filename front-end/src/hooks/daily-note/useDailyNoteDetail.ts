import {useQuery} from '@tanstack/react-query';
import {getDailyNoteDetail} from '@/apis/daily-note/getDailyNoteDetail';
import {KidOfDailyNote} from '@/types/daily-note/KidOfDailyNote';

export const useDailyNoteDetail = (memberId: number, dailyNoteId: string) => {
  return useQuery<KidOfDailyNote, Error>({
    queryKey: ['dailyNoteDetail', dailyNoteId],
    queryFn: () => {
      return getDailyNoteDetail(memberId, dailyNoteId);
    },
  });
};
