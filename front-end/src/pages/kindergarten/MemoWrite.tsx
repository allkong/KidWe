import WriteButton from '@/components/atoms/Button/WriteButton';
import {useNavigate} from 'react-router-dom';

const MemoWrite = () => {
  const navigate = useNavigate();

  return (
    <div>
      <WriteButton onClick={() => navigate('/kindergarten/memo')}></WriteButton>
    </div>
  );
};

export default MemoWrite;
