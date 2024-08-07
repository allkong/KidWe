import {getDailyFood} from '@/apis/food/getDailyFood';
import {useQuery} from '@tanstack/react-query';
import {Dayjs} from 'dayjs';
import {foodKeys} from '@/hooks/food/foodKeys';

export const useGetDailyFood = (kindergartenId: number, date: Dayjs) => {
  const result = useQuery({
    queryKey: foodKeys.detail(kindergartenId, date),
    queryFn: () =>
      getDailyFood(
        kindergartenId,
        date.get('year'),
        date.get('month') + 1,
        date.get('date')
      ),
    enabled: !!date,
    retry: 0,
  });
  return result;
};
