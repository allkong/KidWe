import kidWeCharacter from '@/assets/kid-we-character.png';
import error from '@/assets/error.svg';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('');
  };

  return (
    <div className="h-screen max-w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={kidWeCharacter} />
        <img src={error} />
      </div>
      <div className="flex flex-col items-center justify-center text-gray-200 mb-10 text-sm">
        <p>오류가 발생했어요</p>
        <p>잠시후 다시 이용해주세요</p>
      </div>
      <div className="w-full px-20">
        <Button size="large" label="홈으로 이동" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default NotFound;
