import Toggle from '@/components/atoms/Toggle/Toggle';
import ScheduleInfoItem from '@/components/organisms/Schedule/ScheduleInfoItem';

const ScheduleInfo = () => {
  return (
    <div className="box-border flex flex-col h-60 items-center justify-center text-gray-300 w-full px-5 py-5 bg-[#FBFBFB] border border-[#F3F3F3] rounded-lg">
      <div className="flex items-center justify-between w-full mb-5 h-fit">
        <p className="text-lg">{'7.16 화요일'}</p>
        <Toggle />
      </div>
      <div className="flex-grow w-full space-y-2 overflow-y-auto">
        <ScheduleInfoItem />
        <ScheduleInfoItem />
        <ScheduleInfoItem />
      </div>
    </div>
  );
};

export default ScheduleInfo;
