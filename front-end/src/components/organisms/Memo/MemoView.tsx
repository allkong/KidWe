import BigTag from '@/components/atoms/Tag/BigTag';

interface MemoViewProps {
  time?: string;
  lesson?: string;
  children?: string[];
  tags?: string[];
  content?: string;
}

const MemoView = ({time, lesson, children, tags, content}: MemoViewProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full px-3 py-3 space-y-3 text-gray-300">
      <div>
        <p>{time}</p>
        <p className="text-xl font-semibold">{lesson}</p>
        <div className="flex flex-wrap items-end gap-1">
          <p className="text-sm font-semibold">{children?.join(', ')}</p>
          <p className="text-xs font-semibold text-gray-200">
            {children?.length || 0}명
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 overflow-y-auto h-fit max-h-36">
        {tags &&
          tags.map((tag, idx) => (
            <BigTag
              key={idx}
              bgColor="#FFDFDF"
              textColor="#3E3E3E"
              text={tag}
            />
          ))}
      </div>
      <div className="w-full overflow-y-auto text-sm break-words h-fit max-h-36 text-wrap">
        {content}
      </div>
    </div>
  );
};

export default MemoView;
