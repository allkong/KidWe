import Tag from '@/components/atoms/Tag/Tag';

interface AnnounceTitleProps {
  title: string;
  banName?: string;
}

const ArticleTitle = ({title, banName = '전체'}: AnnounceTitleProps) => {
  const tagColor = banName === '전체' ? '#FFC7C7' : '#FFF1A7';

  return (
    <div className="flex flex-row w-full px-6 py-2 space-x-3 items-centers">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Tag text={banName} size="small" backgroundColor={tagColor} />
    </div>
  );
};

export default ArticleTitle;
