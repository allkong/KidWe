import React, {KeyboardEvent, useState} from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';
import KidWe from '@/assets/kid-we.svg';
import {useLogin} from '@/hooks/login/useLogin';
import {toast} from 'react-toastify';

const LoginMain: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpButtonClick = () => {
    navigate('/signup/role');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLoginButtonClick();
    }
  };

  const loginMutate = useLogin();

  const handleLoginButtonClick = () => {
    loginMutate.mutate(
      {email, password},
      {
        onSuccess: () => {
          navigate('/');
        },
        onError: () => {
          toast.error('아이디와 비밀번호를 확인해주세요');
        },
      }
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen px-10 py-6 space-y-10 bg-white">
        <div className="flex items-center justify-center mb-7">
          <img src={KidWe} />
        </div>
        <div className="w-full px-6 space-y-4">
          <LabelInput
            label="이메일"
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <LabelInput
            label="비밀번호"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full px-6 space-y-2">
          <Button
            label="로그인"
            size="large"
            round="full"
            onClick={handleLoginButtonClick}
          />
          <div className="flex items-center justify-center text-xs text-gray-200">
            <p>아이디 찾기</p>
            <p className="mx-4">|</p>
            <p>비밀번호 찾기</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-200 cursor-default">
            <p>아직 회원이 아니신가요?</p>
            <p
              onClick={handleSignUpButtonClick}
              className="font-semibold cursor-pointer text-primary"
            >
              가입하기
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMain;

// 해결해볼게
