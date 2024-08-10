import {ErrorBoundary} from 'react-error-boundary';
import NotFound from '@/pages/NotFound';
import {Outlet} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';
import {memoState} from '@/recoil/atoms/memo/memo';
import dayjs from 'dayjs';

const MemoView = () => {
  const setMemoState = useSetRecoilState(memoState);

  const handleError = () => {
    setMemoState({
      content: '',
      kids: [],
      lesson: '',
      tags: [],
      updatedTime: dayjs(),
    });
  };

  return (
    <ErrorBoundary fallback={<NotFound />} onError={handleError}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default MemoView;
