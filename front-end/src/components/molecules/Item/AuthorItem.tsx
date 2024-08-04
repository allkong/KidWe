import React from 'react';
// import commentIcon from '@/assets/icons/message-line.svg';
import dayjs from 'dayjs';
import CommentCount from '@/components/atoms/Comment/CommentCount';
interface AnnounceTitleProps {
  writer: string;
  date: Date;
}

const AuthorItem = ({writer, date}: AnnounceTitleProps) => {
  const today = dayjs(date).format('YYYY-MM-DD HH:mm');
  return (
    <div className="w-full flex justify-between items-center pr-2 mt-10">
      <div className="flex justify-between items-center space-x-5 ">
        <p className="text-xl">{writer}</p>
        <p className="text-sm text-gray-200">{today}</p>
      </div>
      <CommentCount count={10} />
    </div>
  );
};

export default AuthorItem;
