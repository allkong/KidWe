import React from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';

const KindergartenBan: React.FC = () => {
  const navigate = useNavigate();

  const handleCompletedButtonClick = () => {
    navigate('/signup/complete');
  };
  const handleBackButtonClick = () => {
    navigate('/signup/kindergarten/search');
  };

  return (
    <div className="min-h-screen space-y-16 py-6 pt-20 flex flex-col items-center  w-full h-full px-5">
      <p className="text-lg">role,본인,원아 유치원이 맞는지 확인해주세요.</p>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-lg text-primary">싸피 유치원</h2>
        <p className="text-sm">서울특별시 테헤란로 212 멀티캠퍼스</p>
      </div>
      <p>
        여기에 반 선택 dropdown 넣고, 그거에 따라 밑에있는 버튼의 보여주기 설정
      </p>
      <div className="flex justify-between px-8 space-x-4">
        <Button label="맞아요" onClick={handleCompletedButtonClick} />
        <Button label="아니에요" onClick={handleBackButtonClick} />
      </div>
    </div>
  );
};

export default KindergartenBan;
