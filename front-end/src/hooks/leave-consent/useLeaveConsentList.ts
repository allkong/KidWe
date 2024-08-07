import {useQuery} from '@tanstack/react-query';
import {
  getLeaveConsentByTeacher,
  getLeaveConsentByParent,
} from '@/apis/leave-consent/getLeaveConsentList';
import {LeaveConsentItem} from '@/types/leave-consent/LeaveConsentItem';

export const useLeaveConsentList = (
  id: number,
  year: number,
  month: number,
  role: 'ROLE_DIRECTOR' | 'ROLE_TEACHER' | 'ROLE_GUARDIAN'
) => {
  return useQuery<LeaveConsentItem[], Error>({
    queryKey: ['leaveConsentList', id, year, month, role],
    queryFn: () => {
      if (role === 'ROLE_DIRECTOR' || role === 'ROLE_TEACHER') {
        return getLeaveConsentByTeacher(id, year, month);
      } else if (role === 'ROLE_GUARDIAN') {
        return getLeaveConsentByParent(id, year, month);
      } else {
        return [];
      }
    },
  });
};
