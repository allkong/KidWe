import Tag from '@/components/atoms/Tag/Tag';
import chick from '@/assets/icons/chick-1.svg';
import dayjs from 'dayjs';
import type {GetMemo} from '@/types/memo/GetMemo';

interface MemoListItemProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  memo?: GetMemo;
}

const MemoListItem = ({onClick, memo}: MemoListItemProps) => {
  const [H, M] = dayjs(memo?.updatedTime).format('H m').split(' ').map(Number);

  const AMPM = H >= 12 ? '오후' : '오전';
  let hour = H > 12 ? H - 12 : H;
  if (hour === 0) hour = 12;
  const minute = M;

  return (
    <div className="flex justify-between text-gray-300 border-l-2 border-gray-200 w-72 min-h-36 h-fit">
      <div className="relative w-4 h-4 rounded-full -left-2.5 -top-3 bg-primary"></div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-gray-300">
          {`${AMPM} ${hour}시 ${minute}분`}
        </p>
        <div
          onClick={onClick}
          className="box-border flex flex-col justify-between w-64 px-4 py-3 space-y-2 bg-white rounded-lg cursor-pointer min-h-20 h-fit"
        >
          <div className="flex items-end space-x-1">
            <img src={chick} />
            <p className="overflow-hidden text-sm font-normal max-w-36 text-ellipsis whitespace-nowrap">
              {memo?.kids && memo?.kids.map(child => `${child.name} `)}
            </p>
            <p className="overflow-hidden text-xs text-gray-200 max-w-10 text-ellipsis whitespace-nowrap">
              {memo?.kids ? memo?.kids.length : 0}명
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-1">
            {memo?.tags &&
              memo?.tags.map((tag, idx) => (
                <Tag key={idx} text={tag.content} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoListItem;
