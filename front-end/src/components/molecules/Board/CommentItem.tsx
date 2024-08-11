import dayjs from 'dayjs';
import Button from '@/components/atoms/Button/Button';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import ReplyIcon from '@/assets/icons/reply-enter.svg?react';

interface CommentItemProps {
  writer: string;
  banName?: string;
  content: string;
  date: string;
  onClick: () => void;
  isReply?: boolean;
}

const CommentItem = ({
  writer,
  banName,
  content,
  date,
  onClick,
  isReply = false,
}: CommentItemProps) => {
  const today = dayjs(date).format('MM.DD HH:mm');
  return (
    <div className="flex items-center justify-between w-full pr-2 mt-10 text-xs">
      <div>{isReply && <ReplyIcon width={68} height={68} />}</div>
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between space-x-5 ">
          <div className="flex items-center space-x-5">
            <p className="text-lg">{writer}</p>
            <p className="text-xs">{banName}</p>
          </div>
          <MoreButton />
        </div>
        <p>{content}</p>
        <div className="flex items-center space-x-5 ">
          <Button
            size="small"
            label="답글"
            variant="negative"
            onClick={onClick}
          />
          <p className="text-sm text-gray-200">{today}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
