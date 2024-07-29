import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {memo} from 'react';
import {useNavigate} from 'react-router-dom';
// import {useHeader} from '@/contexts/header/HeaderContext';

const MemoList = memo(() => {
  // const {handleHeaderTitle} = useHeader();

  // useEffect(() => {
  //   handleHeaderTitle('관찰 메모');
  // }, [handleHeaderTitle]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full items-center bg-[#F8F8F8]">
      <div className="min-w-full mb-10">
        <DateNavigator title="7.16 (화)" />
      </div>
      <MemoListItem />
      <WriteButton onClick={() => navigate('/kindergarten/write')} />
    </div>
  );
});

export default MemoList;
