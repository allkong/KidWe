import Button from '@/components/atoms/Button/Button';
import Divider from '@/components/atoms/Divider/Divider';
import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';

const MemoWrite = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-grow px-5 py-5 space-y-6 overflow-y-scroll">
        <MemoTimeSelect />
        <Divider />
        <MemoTagSelect />
        <Divider />
        <KindergartenInfomationSelect />
      </div>
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button label="메모 작성하기" />
      </div>
    </div>
  );
};

export default MemoWrite;
