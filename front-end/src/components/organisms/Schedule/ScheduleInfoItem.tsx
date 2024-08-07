import Tag from '@/components/atoms/Tag/Tag';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import type {GetSchedule} from '@/types/schedule/GetSchedule';
import {deleteSchedule} from '@/apis/schedule/deleteSchedule';
import {useMutation} from '@tanstack/react-query';
import {useQueryClient} from '@tanstack/react-query';
import {Dayjs} from 'dayjs';

interface ScheduleInfoItem {
  schedule: GetSchedule;
  backgroundColor?: string;
  textColor?: 'black' | 'white';
  isShowMore?: boolean;
  date?: Dayjs;
}

const ScheduleInfoItem = ({
  schedule,
  backgroundColor,
  textColor,
  isShowMore = false,
  date,
}: ScheduleInfoItem) => {
  const queryClient = useQueryClient();

  const deleteMutate = useMutation({
    mutationFn: ({scheduleId}: {scheduleId: number}) =>
      deleteSchedule(scheduleId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['schedules', 1, date?.format('YYMMDD')],
      });
    },
  });

  const handleClickDelete = () => {
    const scheduleId = schedule.scheduleId;
    deleteMutate.mutate({scheduleId: scheduleId});
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Tag
          text={schedule.keyWord}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
        <p className="text-xs">{schedule.content}</p>
      </div>
      {isShowMore ? (
        <MoreButton align="vertical">
          <MoreButton.Option text="삭제" onClick={handleClickDelete} />
        </MoreButton>
      ) : null}
    </div>
  );
};

export default ScheduleInfoItem;
