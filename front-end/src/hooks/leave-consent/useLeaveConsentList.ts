import {useQuery} from '@tanstack/react-query';
import {
  getLeaveConsentByTeacher,
  getLeaveConsentByParent,
} from '@/apis/leave-consent/getLeaveConsentList';
import {LeaveConsentItem} from '@/types/leave-consent/LeaveConsentItem';
import {RoleItem} from '@/enum/roleItem';

export const useLeaveConsentList = (
  id: number | null,
  year: number,
  month: number,
  role: RoleItem
) => {
  return useQuery<LeaveConsentItem[], Error>({
    queryKey: ['leaveConsentList', id, year, month, role],
    queryFn: () => {
      if (role === RoleItem.Director || role === RoleItem.Teacher) {
        return getLeaveConsentByTeacher(id!, year, month);
      } else if (role === RoleItem.Guardian) {
        return getLeaveConsentByParent(id!, year, month);
      } else {
        return [];
      }
    },
    enabled: !!id,
  });
};
