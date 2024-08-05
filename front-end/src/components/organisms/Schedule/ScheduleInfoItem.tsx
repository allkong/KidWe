import Tag from '@/components/atoms/Tag/Tag';

interface ScheduleInfoItem {
  tag: string;
  text?: string;
  isShowMore?: boolean;
}

const ScheduleInfoItem = ({tag, text, isShowMore = true}: ScheduleInfoItem) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Tag text={tag} />
        <p className="text-xs">{text}</p>
      </div>
      {isShowMore ? <p>...</p> : null}
    </div>
  );
};

export default ScheduleInfoItem;
