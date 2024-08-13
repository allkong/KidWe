import {deleteDailyFood} from '@/apis/food/deleteDailyFood';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {foodKeys} from './foodKeys';

export const useDeleteDailyFood = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: ({menuId}: {menuId: number}) => deleteDailyFood(menuId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: foodKeys.all,
      });
    },
  });
  return mutate;
};
