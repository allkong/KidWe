import dayjs from 'dayjs';
import MemoListItem from './MemoListItem';
import {GetMemo} from '@/types/memo/GetMemo';

interface MemoListViewProps {
  data: GetMemo[] | undefined;
  onModalClick: (value: GetMemo) => void;
}

const MemoListView = ({data, onModalClick}: MemoListViewProps) => {
  return (
    <>
      {/* 메모 리스트를 보여주는 화면 */}
      {data &&
        data
          .sort((e1, e2) => {
            return dayjs(e1.updatedTime)
              .format('HH:MM')
              .localeCompare(dayjs(e2.updatedTime).format('HH:MM'));
          })
          .map(memo => (
            <MemoListItem
              key={memo.id}
              memo={memo}
              onClick={() => onModalClick(memo)}
            />
          ))}
    </>
  );
};

export default MemoListView;
