import Button from '@/components/atoms/Button/Button';
import Divider from '@/components/atoms/Divider/Divider';
import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';
import Header from '@/components/organisms/Navigation/Header';
import {containerHeaderClass} from '@/styles/styles';
import {writeMemo} from '@/apis/memo/writeMemo';
import {useMutation} from '@tanstack/react-query';
import {useRecoilValue} from 'recoil';
import {memoState} from '@/recoil/atoms/memo/memo';

const MemoWrite = () => {
  const teacherId = 1;
  const memo = useRecoilValue(memoState);

  const writeMutate = useMutation({
    mutationFn: () => {
      return writeMemo(teacherId, memo);
    },
  });

  const handleClick = () => {
    writeMutate.mutate();
  };

  return (
    <div className={`${containerHeaderClass} flex flex-col h-full bg-white`}>
      <Header title="관찰 메모 작성" buttonType="close" />
      <div className="flex-grow px-5 py-5 space-y-6 overflow-y-scroll">
        <MemoTimeSelect />
        <Divider />
        <MemoTagSelect />
        <Divider />
        <KindergartenInfomationSelect />
      </div>
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button label="메모 작성하기" onClick={handleClick} size="large" />
      </div>
    </div>
  );
};

export default MemoWrite;
