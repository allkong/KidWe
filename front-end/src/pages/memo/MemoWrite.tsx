import Button from '@/components/atoms/Button/Button';
import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerHeaderClass} from '@/styles/styles';
import {useRecoilState} from 'recoil';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '@/components/atoms/Loader/Spinner';
import {useQueryString} from '@/hooks/useQueryString';
import {useGetDailyMemoById} from '@/hooks/memo/useGetDailyMemoById';
import {useWriteDailyMemo} from '@/hooks/memo/useWriteDailyMemo';
import {PostMemo} from '@/types/memo/PostMemo';
import {usePutDailyMemo} from '@/hooks/memo/usePutDailyMemo';

const teacherId = 1;

const MemoWrite = () => {
  const navigate = useNavigate();

  const [memo, setMemo] = useRecoilState<PostMemo>(memoState);
  const memoId = useQueryString().get('id');
  // const date = useQueryString().get('date');

  const {data} = useGetDailyMemoById(teacherId, memoId);
  const writeMutate = useWriteDailyMemo();
  const putMutate = usePutDailyMemo();

  useEffect(() => {
    if (data !== undefined) {
      setMemo({...data, updatedTime: dayjs(data.updatedTime)});
    } else {
      setMemo({
        ...memo,
        lesson: '',
        kids: [],
        tags: [],
        content: '',
      });
    }
  }, [data, setMemo]);

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(
      memo.content !== '' ||
        memo.kids.length !== 0 ||
        memo.lesson !== '' ||
        memo.tags.length !== 0
    );
  }, [memo]);

  const handleClick = () => {
    if (memoId !== null) {
      putMutate.mutate(
        {teacherId, memoId, memo},
        {
          onError: handleError,
          onSuccess: handleSuccess,
        }
      );
    } else {
      writeMutate.mutate(
        {teacherId, memo},
        {
          onError: handleError,
          onSuccess: handleSuccess,
        }
      );
    }
  };

  const handleError = (error: Error) => {
    console.error(error);
    toast.error('오류 발생');
  };

  const handleSuccess = () => {
    navigate('/kindergarten/memo');
  };

  return (
    <>
      {writeMutate && writeMutate.status === 'pending' ? <Spinner /> : null}
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
            label={memoId ? '메모 수정하기' : '메모 작성하기'}
            onClick={handleClick}
            size="large"
          />
        </div>
        <NavigationBar />
      </div>
      <ToastContainer
        position="top-center" // 알람 위치 지정
        autoClose={300} // 자동 off 시간
        hideProgressBar // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        theme="light"
        limit={1}
      />
    </>
  );
};

export default MemoWrite;
