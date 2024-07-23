import React from 'react';
import commentIcon from '@/assets/icons/message-line.svg';

interface CommentIconProps {
  count: number;
}

const CommentCount: React.FC<CommentIconProps> = ({count}) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <img src={commentIcon} />
      <p>{count}</p>
    </div>
  );
};

export default CommentCount;
