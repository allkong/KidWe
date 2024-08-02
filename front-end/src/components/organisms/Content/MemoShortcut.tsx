import {useNavigate} from 'react-router-dom';
import {toKorYMD} from '@/utils/dayjsPlugin';
import Button from '@/components/atoms/Button/Button';
import pencilIcon from '@/assets/menu/pencil.png';

const MemoShortcut = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="p-5 space-y-2 bg-white rounded-lg">
      <div>
        <p className="text-sm text-gray-200">{toKorYMD()}</p>
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-gray-300">
            방금 일어난 일을 바로 기록해 보세요
          </p>
          <img className="w-4 h-4" src={pencilIcon} />
        </div>
      </div>
      <Button
        label="+ 메모 등록하기"
        size="large"
        round="full"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default MemoShortcut;
