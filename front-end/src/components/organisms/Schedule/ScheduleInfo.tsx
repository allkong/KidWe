import Toggle from '@/components/atoms/Toggle/Toggle';
import ScheduleInfoItem from '@/components/organisms/Schedule/ScheduleInfoItem';
import {useQuery} from '@tanstack/react-query';
import {Dayjs} from 'dayjs';
import {useEffect, useState} from 'react';
import {getAllSchedules} from '@/apis/schedule/getAllSchedules';
import {GetSchedule} from '@/types/schedule/GetSchedule';

interface ScheduleInfoProps {
  date: Dayjs;
}

const ScheduleInfo = ({date}: ScheduleInfoProps) => {
  const [infos, setInfos] = useState<GetSchedule[]>();

  const [isShowBan, setIsShowBan] = useState(false);

  const {data} = useQuery({
    queryKey: ['schedules', 0],
    queryFn: () => getAllSchedules(0, date),
  });

  useEffect(() => {
    setInfos(data);
  }, [data]);

  useEffect(() => {
    if (infos === undefined) {
      return;
    }

    if (isShowBan) {
      setInfos([...infos].filter(info => info.type !== 'ALLNOTICE'));
    } else {
      setInfos([...infos].filter(info => info.type === 'ALLNOTICE'));
    }
  }, [isShowBan]);

  return (
    <div className="box-border flex flex-col h-60 items-center justify-center text-gray-300 w-full px-5 py-5 bg-[#FBFBFB] border border-[#F3F3F3] rounded-lg">
      <div className="flex items-center justify-between w-full mb-5 h-fit">
        <p className="text-md">{`${date.format('M.DD ddd')}요일`}</p>
        <Toggle checked={isShowBan} onChange={setIsShowBan} />
      </div>
      <div className="flex-grow w-full space-y-2 overflow-y-auto">
        {infos &&
          infos.map((info, idx) => (
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
