import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postLeaveConsent} from '@/apis/leave-consent/postLeaveConsent';

interface PostLeaveConsentData {
  leaveConsentId: number;
  formData: FormData;
  memberId: number;
}

export const usePostLeaveConsent = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostLeaveConsentData>({
    mutationFn: ({leaveConsentId, formData, memberId}) =>
      postLeaveConsent(leaveConsentId, formData, memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['leaveConsentList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
