import React from 'react';
// import commentIcon from '@/assets/icons/message-line.svg';
import dayjs from 'dayjs';
import Button from '@/components/atoms/Button/Button';
import MoreButton from '@/components/atoms/Button/MoreButton';
import ReplyIcon from '@/assets/icons/reply-enter.svg?react';

interface AnnounceTitleProps {
  writer: string;
  classname: string;
  content: string;
  date: Date;
  onClick: () => void;
  isReply?: boolean;
}

const CommentItem = ({
  writer,
  classname,
  content,
  date,
  onClick,
  isReply = false,
}: AnnounceTitleProps) => {
  const today = dayjs(date).format('MM.DD HH:mm');
  return (
    <div className="w-full flex justify-between items-center pr-2 mt-10 text-xs">
      <div>{isReply && <ReplyIcon width={68} height={68} />}</div>
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center space-x-5 ">
          <div className="flex items-center space-x-5">
            <p className="text-lg">{writer}</p>
            <p className="text-xs">{classname}</p>
          </div>
          <MoreButton />
        </div>
        <p>{content}</p>
        <div className=" flex space-x-5 items-center">
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
