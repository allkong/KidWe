import React from 'react';
// import commentIcon from '@/assets/icons/message-line.svg';
import Tag from '@/components/atoms/Tag/Tag';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import AuthorItem from '@/components/molecules/Item/AuthorItem';
interface AnnounceTitleProps {
  title: string;
  writer: string;
  date: Date;
  classname?: string;
  tagbgcolor?: string;
}

const ArticleTitle = ({
  title,
  writer,
  date,
  classname = '전체',
  tagbgcolor = '#FFF1A7',
}: AnnounceTitleProps) => {
  return (
    <div className="grid items-center w-full p-4 m-2 border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <Tag text={classname} backgroundColor={tagbgcolor} />
        </div>
        <MoreButton />
      </div>
      <AuthorItem writer={writer} date={date} />
    </div>
  );
};

export default ArticleTitle;
