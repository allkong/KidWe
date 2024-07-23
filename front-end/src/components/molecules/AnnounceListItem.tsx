import React from 'react';

interface AnnounceItemProps {
  title: string;
  writer: string;
  date: Date;
  comments: number;
  src?: string;
}

const AnnounceItem: React.FC<AnnounceItemProps> = ({
  title,
  writer,
  date,
  comments,
  src,
}) => {
  const formattedDate = `${date.getFullYear().toString().slice(-2)}.${date.getMonth() + 1}.${date.getDate()}`;

  return (
    <div className="grid grid-cols-12 items-center border-b border-gray-200 p-4 m-2 ">
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
          <p className="flex flex-row space-x-2 items-center">
            <img src="/public/icons/comment.png" alt="" />
            {comments}
          </p>
        </div>
      </div>
      <div className="col-span-3 flex justify-center">
        <img
          src={src}
          className="w-24 h-24 object-cover rounded-lg mr-4"
          alt="No image"
        />
      </div>
    </div>
  );
};

export default AnnounceItem;
