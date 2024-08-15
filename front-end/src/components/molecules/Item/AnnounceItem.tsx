import CommentCount from '@/components/atoms/Comment/CommentCount';
import Tag from '@/components/atoms/Tag/Tag';

export interface AnnounceItemProps {
  title: string;
  banName: string;
  writer: string;
  date: string;
  commentCount: number;
}

const AnnounceItem = ({
  title,
  banName,
  writer,
  date,
  commentCount,
}: AnnounceItemProps) => {
  const tagColor = banName === '전체' ? '#FFC7C7' : '#FFF1A7';

  return (
    <div className="items-center px-5 py-4 bg-white border-b space-y-7">
      <div className="flex flex-row items-center space-x-3">
        <h3 className="text-xl font-medium">{title}</h3>
        <Tag text={banName} backgroundColor={tagColor} size="small" />
      </div>
      <div className="flex flex-row items-center text-xs">
        <p>{writer}</p>
        <span className="mx-2">|</span>
        <p>{date}</p>
        <span className="mx-2">|</span>
        <CommentCount count={commentCount} />
      </div>
    </div>
  );
};

export default AnnounceItem;
