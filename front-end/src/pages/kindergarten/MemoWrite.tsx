import Button from '@/components/atoms/Button/Button';
import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerHeaderClass} from '@/styles/styles';
import {postMemo} from '@/apis/memo/postMemo';
import {useMutation} from '@tanstack/react-query';
import {useRecoilValue} from 'recoil';
import {memoState} from '@/recoil/atoms/memo/memo';

const MemoWrite = () => {
  const teacherId = 1;
  const memo = useRecoilValue(memoState);

  const writeMutate = useMutation({
    mutationFn: () => {
      return postMemo(teacherId, memo);
    },
  });

  const handleClick = () => {
    writeMutate.mutate();
  };

  return (
    <div className={`${containerHeaderClass} flex flex-col h-full bg-white`}>
      <Header title="관찰 메모 작성" buttonType="close" />
      <div className="flex-grow px-5 py-5 space-y-8 overflow-y-scroll">
        <MemoTimeSelect />
        <MemoTagSelect />
        <KindergartenInfomationSelect />
      </div>
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button label="메모 작성하기" onClick={handleClick} size="large" />
      </div>
      <NavigationBar />
    </div>
  );
};

export default MemoWrite;
