import Toggle from '@/components/atoms/Toggle/Toggle';
import ScheduleInfoItem from '@/components/organisms/Schedule/ScheduleInfoItem';
import {useQuery} from '@tanstack/react-query';
import {Dayjs} from 'dayjs';
import {useEffect, useState} from 'react';
import {getAllSchedules} from '@/apis/schedule/getAllSchedules';
import {GetSchedule} from '@/types/schedule/GetSchedule';
import {ScheduleOption} from '@/enum/kindergarten/schedule';

interface ScheduleInfoProps {
  date: Dayjs;
}

const ScheduleInfo = ({date}: ScheduleInfoProps) => {
  const [infos, setInfos] = useState<GetSchedule[]>();

  const [isShowBan, setIsShowBan] = useState(false);

  const {data} = useQuery({
    queryKey: ['schedules', 1, date.format('YYMMDD')],
    queryFn: () => getAllSchedules(1, date),
  });

  const handleToggle = () => {
    setIsShowBan(!isShowBan);
  };

  useEffect(() => {
    setInfos(data);
  }, [data]);

  return (
    <div className="box-border flex flex-col h-60 items-center justify-center text-gray-300 w-full px-5 py-5 bg-[#FBFBFB] border border-[#F3F3F3] rounded-lg">
      <div className="flex items-center justify-between w-full mb-5 h-fit">
        <p className="text-md">{`${date.format('M.DD ddd')}요일`}</p>
        <Toggle checked={isShowBan} onChange={handleToggle} />
      </div>
      <div className="flex-grow w-full space-y-2 overflow-y-auto">
        {infos &&
          infos
            .filter(info =>
              isShowBan
                ? info.type !== ScheduleOption.유치원
                : info.type === ScheduleOption.유치원
            )
            .map((info, idx) => (
              <ScheduleInfoItem
                key={idx}
                tag={info.keyWord}
                text={info.content}
                backgroundColor={isShowBan ? '#FFF1A7' : '#EAEAEA'}
              />
            ))}
      </div>
    </div>
  );
};

export default ScheduleInfo;
