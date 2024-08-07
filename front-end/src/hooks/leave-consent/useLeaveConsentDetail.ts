import {useQuery} from '@tanstack/react-query';
import {getLeaveConsentDetail} from '@/apis/leave-consent/getLeaveConsentDetail';
import {KidOfLeaveConsent} from '@/types/leave-consent/KidOfLeaveConsent';

export const useLeaveConsentDetail = (leaveConsentId: number) => {
  return useQuery<KidOfLeaveConsent, Error>({
    queryKey: ['leaveConsentDatail', leaveConsentId],
    queryFn: () => {
      return getLeaveConsentDetail(leaveConsentId);
    },
  });
};
