import React from 'react';
// import commentIcon from '@/assets/icons/message-line.svg';
import CommentCount from '@/components/atoms/Comment/CommentCount';
interface AnnounceItemProps {
  title: string;
  writer: string;
  date: Date;
  src?: string;
}

const AnnounceItem = ({title, writer, date, src}: AnnounceItemProps) => {
  const formattedDate = `${date.getFullYear().toString().slice(-2)}.${date.getMonth() + 1}.${date.getDate()}`;
  return (
    <div className="grid items-center grid-cols-12 p-4 m-2 border-b border-gray-200 ">
      <div className="col-span-9">
        <div className="flex flex-row space-x-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>버튼</p>
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
        <img
          src={src}
          className="object-cover w-24 h-24 mr-4 rounded-lg"
          alt="No image"
        />
      </div>
    </div>
  );
};

export default AnnounceItem;
