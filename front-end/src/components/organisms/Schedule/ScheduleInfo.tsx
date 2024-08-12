import Toggle from '@/components/atoms/Toggle/Toggle';
import ScheduleInfoItem from '@/components/organisms/Schedule/ScheduleInfoItem';
import {Dayjs} from 'dayjs';
import {useState} from 'react';
import {DirectorScheduleOption} from '@/enum/kindergarten/schedule';
import {useGetKindergartenSchedules} from '@/hooks/schedule/useGetKindergartenSchedules';
import {getKindergartenId} from '@/utils/userData';

interface ScheduleInfoProps {
  date: Dayjs;
}

const ScheduleInfo = ({date}: ScheduleInfoProps) => {
  const [isShowBan, setIsShowBan] = useState(false);

  const {data} = useGetKindergartenSchedules(
    getKindergartenId()!,
    date.format('YYYY-MM-DD')
  );

  const handleToggle = () => {
    setIsShowBan(!isShowBan);
  };

  return (
    <div className="box-border flex flex-col h-60 items-center justify-center text-gray-300 w-full px-5 py-5 bg-[#FBFBFB] border border-[#F3F3F3] rounded-lg">
      <div className="flex items-center justify-between w-full mb-5 h-fit">
        <p className="text-md">{`${date.format('M.DD ddd')}요일`}</p>
        <Toggle checked={isShowBan} onChange={handleToggle} />
      </div>
      <div className="flex-grow w-full space-y-2 overflow-y-auto">
        {data &&
          data
            .filter(info =>
              isShowBan
                ? info.type !== DirectorScheduleOption.유치원
                : info.type === DirectorScheduleOption.유치원
            )
            .map(schedule => (
              <ScheduleInfoItem
                key={schedule.scheduleId}
                schedule={schedule}
                backgroundColor={isShowBan ? '#FFF1A7' : '#EAEAEA'}
                date={date}
                isShowMore={true}
              />
            ))}
      </div>
    </div>
  );
};

export default ScheduleInfo;
