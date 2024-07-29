import React from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';

const RegisterCompleted: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen space-y-8 py-6 flex flex-col items-center  w-full h-full px-10">
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 flex items-center justify-center border rounded-xl">
          <p>div까지 image</p>
        </div>
      </div>
      <div className="text-lg">
        <p>원장님 키위에 가입해주셔서 감사합니다 :D</p>
        <p>좋은 서비스로 보답하겠습니다!</p>
      </div>

      <div className="absolute bottom-8 w-1/2">
        <Button
          label="우리 유치원 가기"
          size="large"
          onClick={handleGoHomeButtonClick}
        />
      </div>
    </div>
  );
};

export default RegisterCompleted;
