import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';
import Header from '@/components/organisms/Navigation/Header';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';
import {containerHeaderClass} from '@/styles/styles';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {PostMemo} from '@/types/memo/PostMemo';
import {useRecoilState} from 'recoil';
import dayjs from 'dayjs';
import {useGetDailyMemoById} from '@/hooks/memo/useGetDailyMemoById';
import {usePutDailyMemo} from '@/hooks/memo/usePutDailyMemo';
import {useParams} from 'react-router-dom';
import {getMemberId} from '@/utils/userData';

const MemoWrite = () => {
  const navigate = useNavigate();

  const paramMemoId = useParams().memoId;
  const {data} = useGetDailyMemoById(getMemberId()!, paramMemoId);

  const [memo, setMemo] = useRecoilState<PostMemo>(memoState);
  useEffect(() => {
    if (data) {
      setMemo({
        content: data.content,
        kids: data.kids,
        lesson: data.lesson,
        tags: data.tags,
        updatedTime: dayjs(data.updatedTime),
      });
    }
  }, [setMemo, data]);

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(
      memo.content !== '' ||
        memo.kids.length !== 0 ||
        memo.lesson !== '' ||
        memo.tags.length !== 0
    );
  }, [memo]);

  const putMutate = usePutDailyMemo();
  const handleClick = () => {
    if (paramMemoId) {
      putMutate.mutateAsync(
        {memo, memoId: paramMemoId, teacherId: getMemberId()!},
        {
          onSuccess: () => {
            navigate({
              pathname: '/memo',
              search: `?date=${dayjs(data?.updatedTime).format('YYYY-MM-DD')}`,
            });
          },
        }
      );
    }
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
          label="메모 수정하기"
          variant={isValid ? 'positive' : 'negative'}
          disabled={!isValid}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default MemoWrite;
