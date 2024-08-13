import {putDailyFood} from '@/apis/food/putDailyFood';
import {PostFood} from '@/types/food/PostFood';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {foodKeys} from './foodKeys';

export const usePutDailyFood = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: ({menuId, body}: {menuId: number; body: PostFood}) =>
      putDailyFood(menuId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: foodKeys.all,
      });
    },
  });
  return mutate;
};
