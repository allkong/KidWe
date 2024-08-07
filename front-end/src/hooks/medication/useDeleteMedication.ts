import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteMedication} from '@/apis/medication/deleteMedication';

export const useDeleteMedication = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: deleteMedication,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['medicationList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
