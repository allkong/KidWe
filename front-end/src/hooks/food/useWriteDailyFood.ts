import {postFood} from '@/apis/food/postFood';
import {PostFood} from '@/types/food/PostFood';
import {useMutation} from '@tanstack/react-query';

export const useWriteDailyFood = () => {
  const result = useMutation({
    mutationFn: ({
      kindergartenId,
      menu,
    }: {
      kindergartenId: number;
      menu: PostFood;
    }) => postFood(kindergartenId, menu),
  });
  return result;
};
