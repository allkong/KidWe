import React from 'react';
import commentIcon from '@/assets/icons/message-line.svg';

interface CommentIconProps {
  count: number;
}

const CommentCount = ({count}: CommentIconProps) => {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <img src={commentIcon} />
      <p>{count}</p>
    </div>
  );
};

export default CommentCount;
