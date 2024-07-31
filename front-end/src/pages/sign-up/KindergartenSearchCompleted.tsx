import React from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';

const KindergartenSearchCompleted: React.FC = () => {
  const navigate = useNavigate();

  const handleCompletedButtonClick = () => {
    navigate('/register/completed');
  };
  const handleBackButtonClick = () => {
    navigate('/register/kindergarten/search');
  };

  return (
    <div className="min-h-screen space-y-16 py-6 pt-20 flex flex-col items-center  w-full h-full px-5">
      <p className="text-lg">원아의 유치원이 맞는지 확인해주세요.</p>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-lg text-primary">싸피 유치원</h2>
        <p className="text-sm">서울특별시 테헤란로 212 멀티캠퍼스</p>
      </div>
      <div className="flex justify-between px-8 space-x-4">
        <Button label="맞아요" onClick={handleCompletedButtonClick} />
        <Button label="아니에요" onClick={handleBackButtonClick} />
      </div>
    </div>
  );
};

export default KindergartenSearchCompleted;
