import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postLeaveConsent} from '@/apis/leave-consent/postLeaveConsent';

interface PostLeaveConsentData {
  leaveConsentId: number;
  formData: FormData;
}

export const usePostLeaveConsent = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostLeaveConsentData>({
    mutationFn: ({leaveConsentId, formData}) =>
      postLeaveConsent(leaveConsentId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['leaveConsentList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
