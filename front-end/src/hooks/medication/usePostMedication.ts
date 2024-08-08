import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postMedication} from '@/apis/medication/postMedication';

interface PostMedicationData {
  kidId: number;
  formData: FormData;
  memberId: number;
}

export const usePostMedication = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostMedicationData>({
    mutationFn: ({kidId, formData, memberId}) =>
      postMedication(kidId, formData, memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['medicationList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
