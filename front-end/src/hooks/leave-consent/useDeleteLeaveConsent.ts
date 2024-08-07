import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteLeaveConsent} from '@/apis/leave-consent/deleteLeaveConsent';

export const useDeleteLeaveConsent = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: deleteLeaveConsent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['leaveConsentList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
