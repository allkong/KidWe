import {putAttendanceInfo} from '@/apis/attendance/putAttendanceInfo';
import {useMutation} from '@tanstack/react-query';
import {attendanceKeys} from '@/hooks/attendance/attendanceKeys';
import {useQueryClient} from '@tanstack/react-query';

export const usePutAttendanceInfo = (banId: number) => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: ({
      year,
      month,
      day,
      kidIds,
      attendedToday,
    }: {
      year: number;
      month: number;
      day: number;
      kidIds: number[];
      attendedToday: 'NOTHING' | 'ATTENDANCE' | 'ABSENCE';
    }) => putAttendanceInfo(year, month, day, kidIds, attendedToday),
    onSuccess: (_, {year, month, day}) => {
      queryClient.invalidateQueries({
        queryKey: attendanceKeys.lists(banId, year, month, day),
      });
    },
  });
  return result.data;
};
