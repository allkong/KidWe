import {getAllSchedules} from '@/apis/schedule/getAllSchedules';
import {useQuery} from '@tanstack/react-query';
import {GetSchedule} from '@/types/schedule/GetSchedule';
import {scheduleKeys} from '@/hooks/schedule/scheduleKeys';

/**
 *
 * @param kindergartenId
 * @param date YYYY-MM-DD
 * @returns
 */
export const useGetKindergartenSchedules = (
  kindergartenId: number,
  date: string
) => {
  const result = useQuery<GetSchedule[]>({
    queryKey: scheduleKeys.schedules(kindergartenId, date),
    queryFn: () => getAllSchedules(kindergartenId, date),
    retry: 0,
  });
  return result;
};
