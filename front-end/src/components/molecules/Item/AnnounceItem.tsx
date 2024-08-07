import React from 'react';
// import commentIcon from '@/assets/icons/message-line.svg';
import CommentCount from '@/components/atoms/Comment/CommentCount';
import Tag from '@/components/atoms/Tag/Tag';
import {AnnounceItemProps} from '@/types/announce/AnnounceItemProps';

const AnnounceItem = ({
  id,
  title,
  writer,
  date,
  src,
  classname = '',
  tagbgcolor = '#FFF1A7',
  onClick,
}: AnnounceItemProps) => {
  const formattedDate = `${date.getFullYear().toString().slice(-2)}.${date.getMonth() + 1}.${date.getDate()}`;
  return (
    <div
      className="grid items-center grid-cols-12 p-4 m-2 border-b border-gray-200 "
      onClick={onClick}
    >
      <div className="col-span-9">
        <div className="flex flex-row space-x-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <Tag text={classname} backgroundColor={tagbgcolor} />
        </div>
        <div className="flex flex-row items-center mt-10">
          <p>{writer}</p>
          <span className="mx-2">|</span>
          <p>{formattedDate}</p>
          <span className="mx-2">|</span>
          <CommentCount count={10} />
        </div>
      </div>
      <div className="flex justify-center col-span-3">
        {src && (
          <img
            src={src}
            className="object-cover w-24 h-24 mr-4 rounded-lg"
            alt="No image"
          />
        )}
      </div>
    </div>
  );
};

export default AnnounceItem;
