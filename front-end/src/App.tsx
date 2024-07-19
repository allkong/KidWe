import React from 'react';
import TestText from '@/components/atoms/TestText';

const App = () => {
  return (
    <>
      <div className="bg-primary font-pretendard">Font 및 색상 테스트</div>
      <div className="bg-secondary font-pretendard">Font 및 색상 테스트</div>
      <div className="bg-gray-100 font-pretendard">Font 및 색상 테스트</div>
      <div className="bg-gray-200 font-pretendard">Font 및 색상 테스트</div>
      <div className="bg-gray-300 font-pretendard">Font 및 색상 테스트</div>
      <TestText text={'Component Test'} />
    </>
  );
};

export default App;
