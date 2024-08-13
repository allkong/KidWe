import {deleteSchedule} from '@/apis/schedule/deleteSchedule';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {scheduleKeys} from './scheduleKeys';

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({scheduleId}: {scheduleId: number}) =>
      deleteSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: scheduleKeys.all,
      });
    },
  });
  return mutation;
};
