import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';
import Header from '@/components/organisms/Navigation/Header';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';
import {containerHeaderClass} from '@/styles/styles';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useWriteDailyMemo} from '@/hooks/memo/useWriteDailyMemo';
import {PostMemo} from '@/types/memo/PostMemo';
import {useRecoilState} from 'recoil';
import dayjs from 'dayjs';

const teacherId = 1;

const MemoWrite = () => {
  const navigate = useNavigate();

  const [serachParams] = useSearchParams();
  const paramDate = serachParams.get('date'); // query로 date가 올바르지 않게 들어올 때 에러 처리 필요
  let currentDate = dayjs().format('YYYY-MM-DD HH:mm');
  if (paramDate !== undefined) {
    currentDate = dayjs(`${paramDate} ${dayjs().format('HH:mm')}`).format(
      'YYYY-MM-DD HH:mm'
    );
  }

  const [memo, setMemo] = useRecoilState<PostMemo>(memoState);
  useEffect(() => {
    setMemo({
      content: '',
      kids: [],
      lesson: '',
      tags: [],
      updatedTime: dayjs(currentDate),
    });
  }, [currentDate, setMemo]);

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(
      memo.content !== '' ||
        memo.kids.length !== 0 ||
        memo.lesson !== '' ||
        memo.tags.length !== 0
    );
  }, [memo]);

  const writeMutate = useWriteDailyMemo();
  const handleClick = () => {
    console.log(memo);

    writeMutate.mutateAsync(
      {teacherId, memo},
      {
        onSuccess: () =>
          navigate({
            pathname: '/memo',
            search: `?date=${paramDate}`,
          }),
      }
    );
  };

  return (
    <>
      <div className={`${containerHeaderClass} flex flex-col h-full bg-white`}>
        <Header title="관찰 메모 작성" buttonType="back" />
        <div className="flex-grow px-5 py-5 space-y-8 overflow-y-scroll">
          <MemoTimeSelect />
          <MemoTagSelect />
          <KindergartenInfomationSelect />
        </div>
        <ButtonBar
          label="메모 작성하기"
          variant={isValid ? 'positive' : 'negative'}
          disabled={!isValid}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default MemoWrite;
