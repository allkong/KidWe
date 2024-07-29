import React, {useEffect, useState} from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';

const RegisterKindergarden: React.FC = () => {
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
    <div className=" min-h-screen ">
      <div className="main-container space-y-8 py-6 flex flex-col items-center w-full h-full px-10">
        <div className="flex items-center justify-center text-lg">
          <p>유치원을 등록해주세요</p>
          <div className="w-40 h-40 flex items-center justify-center border rounded-xl">
            <p>div까지 image</p>
          </div>
        </div>
        <div className="w-full space-y-8">
          <LabelInput label="이름" value="이름을 적어주세요" />
          <div className="grid grid-cols-12 gap-x-2">
            <div className="col-span-8 ">
              <LabelInput label="주소" value="주소를 적어주세요" />
            </div>
            <div className="col-span-4 flex items-end">
              <Button label="검색" />
            </div>
            <div className="col-span-12">
              <LabelInput value="상세 주소 적어주세요" />
            </div>
          </div>
          <div className="w-full space-y-4"></div>
          <LabelInput label="원 번호" value="유치원 번호 적어주세요" />
        </div>
      </div>
      <div
        className={`${isShort ? 'absolute bottom-0' : 'relative mt-8'} w-full flex justify-center px-4`}
      >
        <Button label="유치원 등록" />
      </div>
    </div>
  );
};

export default RegisterKindergarden;
