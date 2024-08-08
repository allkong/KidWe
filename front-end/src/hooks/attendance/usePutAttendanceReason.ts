import {putAttendanceReason} from '@/apis/attendance/putAttendanceReason';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {attendanceKeys} from './attendanceKeys';

export const usePutAttendanceReason = (banId: number) => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({
      kidId,
      year,
      month,
      day,
      reason,
    }: {
      year: number;
      month: number;
      day: number;
      kidId: number;
      reason: string;
    }) => putAttendanceReason(kidId, year, month, day, reason),
    onSuccess: (_, {year, month, day}) => {
      queryClient.invalidateQueries({
        queryKey: attendanceKeys.lists(banId, year, month, day),
      });
    },
  });
  return result;
};
