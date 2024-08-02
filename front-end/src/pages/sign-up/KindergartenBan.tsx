import React, {useState} from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';
import SelectMain from '@/components/molecules/Select/SelectMain';
import Select from '@/components/molecules/Select/Select';

const KindergartenBan: React.FC = () => {
  const navigate = useNavigate();

  const handleCompletedButtonClick = () => {
    navigate('/signup/complete');
  };
  const handleBackButtonClick = () => {
    navigate('/signup/kindergarten/search');
  };

  const [selected, setSelected] = useState('');
  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="min-h-screen space-y-16 py-6 pt-20 flex flex-col items-center  w-full h-full px-5">
      <p className="text-lg">
        본인/원아 유치원이 맞는지 확인하고, 반을 선택해주세요.
      </p>
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-lg text-primary">싸피 유치원</h2>
        <p className="text-sm">서울특별시 테헤란로 212 멀티캠퍼스</p>
      </div>
      <div className="flex space-x-2">
        <SelectMain size="medium" label="옵션" onChange={handleChange}>
          <Select.Option text="펩시반" id="1" />
          <Select.Option text="환타반" id="2" />
        </SelectMain>
        <p>{selected} : selected(id)는 서버에 보내기</p>
      </div>

      <div className="flex justify-between px-8 space-x-4">
        <Button label="맞아요" onClick={handleCompletedButtonClick} />
        <Button label="아니에요" onClick={handleBackButtonClick} />
      </div>
    </div>
  );
};

export default KindergartenBan;
