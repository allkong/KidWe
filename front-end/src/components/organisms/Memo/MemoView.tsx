import Tag from '@/components/atoms/Tag/Tag';
import chick from '@/assets/icons/chick-1.svg';

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
        <div className="flex items-center gap-2">
          <img src={chick} />
          <p>{time}</p>
        </div>
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
            <Tag
              key={idx}
              backgroundColor="#FFDFDF"
              textColor="black"
              text={tag}
              size="large"
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
