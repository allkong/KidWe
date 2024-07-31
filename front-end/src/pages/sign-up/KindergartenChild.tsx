import React from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';

const KindergartenChild: React.FC = () => {
  const navigate = useNavigate();

  const handleCompletedButtonClick = () => {
    navigate('/signup/complete');
  };

  return (
    <div className="min-h-screen space-y-16 py-6 pt-20 flex flex-col items-center  w-full h-full px-5">
      <p>본인 아이꺼</p>
      <div>
        <Button label="아이 등록" onClick={handleCompletedButtonClick} />
      </div>
    </div>
  );
};

export default KindergartenChild;
