import React from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';

const RegisterComplete: React.FC = () => {
  const navigate = useNavigate();

  const handleGoLoginButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen px-10 py-6 space-y-8">
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center w-40 h-40 border rounded-xl">
          <p>div까지 image</p>
        </div>
      </div>
      <div className="text-lg">
        <p>role님 키위에 가입해주셔서 감사합니다 :D</p>
        <p>좋은 서비스로 보답하겠습니다!</p>
      </div>

      <div className="absolute w-1/2 bottom-8">
        <Button
          label="우리 유치원 가기"
          size="large"
          onClick={handleGoLoginButtonClick}
        />
      </div>
    </div>
  );
};

export default RegisterComplete;
