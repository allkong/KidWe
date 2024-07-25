import React from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';

const LoginMain: React.FC = () => {
  return (
    <div className="py-6 bg-secondary h-full">
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 flex items-center justify-center border rounded-xl">
          <p>div까지 image</p>
        </div>
      </div>
      <LabelInput label="아이디" value="아이디 적어주세요" />
      <LabelInput label="비밀번호" value="비밀번호 적어주세요" />
      <Button label="로그인" />
      <div className="flex flex-row items-center justify-center text-gray-200">
        <p>아이디 찾기</p>
        <p>|</p>
        <p>비밀번호 찾기</p>
      </div>
      <Button label="회원 가입" />
    </div>
  );
};

export default LoginMain;
