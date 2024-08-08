import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postLeaveConsent} from '@/apis/leave-consent/postLeaveConsent';

interface PostLeaveConsentData {
  kidId: number;
  formData: FormData;
  memberId: number;
}

export const usePostLeaveConsent = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostLeaveConsentData>({
    mutationFn: ({kidId, formData, memberId}) =>
      postLeaveConsent(kidId, formData, memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['leaveConsentList']});
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
