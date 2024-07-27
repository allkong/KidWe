import Tag from '@/components/atoms/Tag/Tag';
import chick from '@/assets/icons/chick-1.svg';

interface MemoListItemProps {
  children?: string[];
  tags?: string[];
  time?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MemoListItem = ({children, tags, time, onClick}: MemoListItemProps) => {
  return (
    <div className="flex justify-between text-gray-300 border-l-2 border-gray-200 w-72 h-36">
      <div className="relative w-4 h-4 rounded-full -left-2.5 -top-3 bg-primary"></div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-gray-300">{time}</p>
        <div
          onClick={onClick}
          className="box-border flex flex-col justify-between w-64 h-20 px-4 py-3 bg-white rounded-lg cursor-pointer"
        >
          <div className="flex items-end space-x-1">
            <img src={chick} />
            <p className="overflow-hidden text-sm font-normal max-w-36 text-ellipsis whitespace-nowrap">
              {children && children.join(', ')}
            </p>
            <p className="overflow-hidden text-xs text-gray-200 max-w-10 text-ellipsis whitespace-nowrap">
              {children ? children.length : 0}명
            </p>
          </div>
          <div className="max-w-full space-x-1 overflow-x-auto overflow-y-hidden whitespace-nowrap">
            {tags && tags.map((tag, idx) => <Tag key={idx} text={tag} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoListItem;
