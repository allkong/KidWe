import React, {useState, useEffect} from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import {postLogin} from '@/apis/login/postLogin';

const LoginMain: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUpButtonClick = () => {
    navigate('/signup/role');
  };

  const loginMutate = useMutation({
    mutationFn: () => {
      return postLogin(email, password);
    },
    onSuccess: data => {
      if (data.status === 200) {
        console.log('로그인 완료');
        navigate('/');
      } else {
        console.error('로그인 실패:', data.status);
        setError('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    },
    onError: error => {
      console.error('로그인을 다시 하세요:', error);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const handleLoginButtonClick = () => {
    loginMutate.mutate();
  };

  return (
    <div className="min-h-screen space-y-8 py-6 flex flex-col items-center bg-secondary w-full h-full px-10">
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 flex items-center justify-center border rounded-xl">
          <p>div까지 image</p>
        </div>
      </div>
      <div className="w-full space-y-8">
        <LabelInput
          label="아이디"
          value={email}
          placeholder="아이디 적어주세요"
          onChange={e => setEmail(e.target.value)}
        />
        <LabelInput
          label="비밀번호"
          value={password}
          placeholder="비밀번호 적어주세요"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="space-y-2 items-center justify-center">
        <Button label="로그인" size="large" onClick={handleLoginButtonClick} />
        <div className="flex text-gray-200 text-xs items-center justify-center">
          <p>아이디 찾기</p>
          <p className="mx-4">|</p>
          <p>비밀번호 찾기</p>
        </div>
      </div>
      <div className="absolute bottom-8 w-1/4">
        <Button
          label="회원 가입"
          size="large"
          onClick={handleSignUpButtonClick}
        />
      </div>
    </div>
  );
};

export default LoginMain;

// 해결해볼게
