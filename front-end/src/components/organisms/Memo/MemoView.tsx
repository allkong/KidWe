import Tag from '@/components/atoms/Tag/Tag';
import chick from '@/assets/icons/chick-1.svg';
import type {GetMemo} from '@/types/memo/GetMemo';
import dayjs from 'dayjs';

interface MemoViewProps {
  memo?: GetMemo;
}

const MemoView = ({memo}: MemoViewProps) => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full px-3 py-3 space-y-3 text-gray-300">
      <div>
        <div className="flex items-center gap-2">
          <img src={chick} />
          <p>{dayjs(memo?.updatedTime).format('A HH:MM')}</p>
        </div>
        <p className="text-xl font-semibold">{memo?.lesson}</p>
        <div className="flex flex-wrap items-end gap-1">
          <p className="text-sm font-semibold">
            {memo?.kids && memo?.kids.map(child => `${child.name} `)}
          </p>
          <p className="text-xs font-semibold text-gray-200">
            {memo?.kids ? memo?.kids.length : 0}명
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 overflow-y-auto h-fit max-h-36">
        {memo?.tags &&
          memo?.tags.map((tag, idx) => <Tag key={idx} text={tag.content} />)}
      </div>
      <div className="w-full overflow-y-auto text-sm break-words h-fit max-h-36 text-wrap">
        {memo?.content}
      </div>
    </div>
  );
};

export default MemoView;
