import React, {useEffect, useState} from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';

const RegisterInfo: React.FC = () => {
  const [isShort, setIsShort] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mainContainer = document.querySelector('.main-container');
      if (mainContainer) {
        setIsShort(mainContainer.clientHeight + 56 < window.innerHeight);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener on component unmount
  }, []);

  return (
    <div>
      <div className="main-container min-h-screen space-y-8 py-6 flex flex-col items-center w-full h-full px-10">
        <div className="flex items-center justify-center">
          <div className="w-40 h-40 flex items-center justify-center border rounded-xl">
            <p>div까지 image</p>
          </div>
        </div>
        <div className="w-full space-y-8">
          <LabelInput label="이름" value="이름을 적어주세요" />
          <LabelInput label="아이디" value="아이디 적어주세요" />
          <div className="w-full space-y-4">
            <LabelInput
              label="비밀번호"
              value="비밀번호 적어주세요"
              type="password"
            />
            <LabelInput
              value="다시 한 번 비밀번호를 적어주세요"
              type="password"
            />
          </div>
          <LabelInput label="이메일" value="이메일 적어주세요" />
        </div>
      </div>
      <div
        className={`${isShort ? 'absolute bottom-8' : 'relative mt-8'} w-full flex justify-center px-4`}
      >
        <Button label="회원 가입" />
        {/* 이렇게 회원 가입을 한 후 role에 따라 rendering 되는 page가 달라짐 */}
      </div>
    </div>
  );
};

export default RegisterInfo;
