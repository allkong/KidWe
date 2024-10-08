import {getDailyFood} from '@/apis/food/getDailyFood';
import {useQuery} from '@tanstack/react-query';
import {Dayjs} from 'dayjs';
import {foodKeys} from '@/hooks/food/foodKeys';
import {GetFood} from '@/types/food/GetFood';

export const useGetDailyFood = (kindergartenId: number, date: Dayjs) => {
  const result = useQuery<GetFood>({
    queryKey: foodKeys.detail(kindergartenId, date),
    queryFn: () =>
      getDailyFood(
        kindergartenId,
        date.get('year'),
        date.get('month') + 1,
        date.get('date')
      ),
    enabled: !!date,
  });
  return result;
};
