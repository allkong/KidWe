import {postSchedule} from '@/apis/schedule/postSchedule';
import type {PostSchedule} from '@/types/schedule/PostSchedule';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {scheduleKeys} from '@/hooks/schedule/scheduleKeys';

/**
 *
 * @param memberId
 * @param kindergartenId query invalidate를 위해서 필요
 * @param keyword
 * @param content
 * @param localDate YYYY-MM-DD
 * @param type
 */
export const useWriteKindergartenSchedule = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({
      memberId,
      keyword,
      content,
      localDate,
      type,
    }: {
      memberId: number;
      keyword: string;
      content: string;
      localDate: string;
      type: 'EVENT' | 'CLASS' | 'ALLNOTICE';
    }) => {
      const body: PostSchedule = {
        keyword,
        content,
        localDate,
        scheduleType: type,
      };
      console.log(body);
      return postSchedule(memberId, body);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: scheduleKeys.all,
      });
    },
  });
  return result;
};
