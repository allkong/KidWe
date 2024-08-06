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
import {Memo} from '@/types/memo/Memo';
import {useEffect, useState} from 'react';

const teacherId = 1;

const MemoWrite = () => {
  const memo = useRecoilValue(memoState);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      memo.content !== '' ||
        memo.kids.length !== 0 ||
        memo.lesson !== '' ||
        memo.tagRequestDtos.length !== 0
    );
  }, [memo]);

  const writeMutate = useMutation({
    mutationFn: ({teacherId, memo}: {teacherId: number; memo: Memo}) => {
      return postMemo(teacherId, memo);
    },
  });

  const handleClick = () => {
    writeMutate.mutate({teacherId, memo});
  };

  return (
    <div className={`${containerHeaderClass} flex flex-col h-full bg-white`}>
      <Header title="관찰 메모 작성" buttonType="back" />
      <div className="flex-grow px-5 py-5 space-y-8 overflow-y-scroll">
        <MemoTimeSelect />
        <MemoTagSelect />
        <KindergartenInfomationSelect />
      </div>
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button
          variant={isValid ? 'positive' : 'negative'}
          disabled={!isValid}
          label="메모 작성하기"
          onClick={handleClick}
          size="large"
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default MemoWrite;
