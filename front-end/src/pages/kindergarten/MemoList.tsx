import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';

const MemoList = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="min-w-full mb-10">
        <DateNavigator title="7.16 (화)" />
      </div>
      <MemoListItem />
    </div>
  );
};

export default MemoList;
