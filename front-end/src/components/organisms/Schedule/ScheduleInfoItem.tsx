import Tag from '@/components/atoms/Tag/Tag';

interface ScheduleInfoItem {
  category?: string;
}

const ScheduleInfoItem = ({category}: ScheduleInfoItem) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Tag text="햇살반" />
        <p className="text-xs">{category}운동회</p>
      </div>
      <p>...</p>
    </div>
  );
};

export default ScheduleInfoItem;
