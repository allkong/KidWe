import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {useEffect, memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {useHeader} from '@/contexts/header/HeaderContext';

/**
 * changeHeaderTitle로 인해 내부 요소가 re-rendering이 되는 것을 방지하기 위해 memo 사용
 * strictMode에서는 의도적으로 컴포넌트가 두번 렌더링되게 함
 * strictMode를 해제하거나 실제 build를 하면 컴포넌트가 한번만 렌더링 됨
 */
const MemoList = memo(() => {
  const {handleHeaderTitle} = useHeader();

  useEffect(() => {
    handleHeaderTitle('관찰 메모');
  }, [handleHeaderTitle]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center ">
      <div className="min-w-full mb-10">
        <DateNavigator title="7.16 (화)" />
      </div>
      <MemoListItem />
      <WriteButton onClick={() => navigate('/kindergarten/write')} />
    </div>
  );
});

export default MemoList;
