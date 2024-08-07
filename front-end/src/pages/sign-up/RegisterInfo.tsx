import React, {useEffect, useState} from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {Signup} from '@/recoil/atoms/signup/Signup';
import {useMutation} from '@tanstack/react-query';
import {postSignup} from '@/apis/signup/postSignup';
import {toast, ToastContainer} from 'react-toastify';
const RegisterInfo = () => {
  const [signupregister, setSignupRegister] = useRecoilState(Signup);
  const [isStateUpdated, setIsStateUpdated] = useState(false);
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [userpassword2, setUserpassword2] = useState('');
  const [usertel, setUsertel] = useState('');
  const [iswrongpasswordtype, setIsWrongPasswordType] = useState(false);
  const [iswrongemailtype, setIsWrongEmailType] = useState(false);
  const [ismissingvalue, setIsMissingValue] = useState(false);
  const navigate = useNavigate();

  // 이메일 정규 표현식 패턴
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const signupMutate = useMutation({
    mutationFn: () => {
      return postSignup(signupregister);
    },
  });

  const handleRegisterButtonClick = () => {
    {
      // 회원가입 유효성 검사
      if (
        // 이름과 전화번호가 빈 칸인지 확인
        !username.trim() ||
        !useremail.trim() ||
        !userpassword.trim() ||
        !userpassword2.trim() ||
        !usertel.trim()
      ) {
        console.log('값을 적어주세요');
        setIsMissingValue(true);
        return;
      } else {
        setIsMissingValue(false);
      }

      if (!emailPattern.test(useremail)) {
        setIsWrongEmailType(true);
        console.log('이메일을 다시 입력해주세요');
        return;
      } else {
        setIsWrongEmailType(false);
      }
      if (userpassword !== userpassword2) {
        setIsWrongPasswordType(true);
        console.log('비밀번호 확인이 틀립니다.');
        return;
      } else {
        setIsWrongPasswordType(false);
      }
    }

    setSignupRegister(prevState => ({
      member: {
        ...prevState.member,
        name: username,
        tel: usertel,
        email: useremail,
        password: userpassword,
      },
    }));
    setIsStateUpdated(true);
  };

  useEffect(() => {
    // 혹시 새로고침하여서 role이 없는 경우 redirect
    if (!signupregister.member.role) {
      toast.error('역할부터 정해주세요', {
        onClose: () => navigate('/signup/role'),
      });
    }
    if (isStateUpdated) {
      const postSignup = async () => {
        try {
          signupMutate.mutate();
          console.log('회원가입 완료');
          navigate('/login');
        } catch (error) {
          console.error('회원가입에 실패했습니다', error);
        }
      };
      postSignup();
      setIsStateUpdated(false);
    }
  }, [isStateUpdated, navigate, signupMutate, signupregister]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss
        limit={1}
      />
      <div className="main-container min-h-screen space-y-8 py-6 flex flex-col items-center w-full h-full px-10">
        <div className="flex items-center justify-center">
          <div className="w-40 h-40 flex items-center justify-center ">
            <img src="/icons/kid.png" alt="Kid Icon" />
          </div>
        </div>
        <div className="w-full space-y-8">
          <LabelInput
            label="이름"
            value={username}
            placeholder="이름을 적어주세요"
            onChange={e => setUsername(e.target.value)}
          />
          <LabelInput
            label="이메일"
            value={useremail}
            placeholder="ex)kidwe@kidwe.com"
            onChange={e => setUseremail(e.target.value)}
          />
          {iswrongemailtype && (
            <p className="text-red-600">이메일을 다시 입력해주세요</p>
          )}
          <div className="w-full space-y-4">
            <LabelInput
              label="비밀번호"
              value={userpassword}
              placeholder="비밀번호를 적어주세요"
              type="password"
              onChange={e => setUserpassword(e.target.value)}
            />
            {iswrongpasswordtype && (
              <p className="text-red-600">비밀번호를 다시 입력해주세요</p>
            )}
            <LabelInput
              value={userpassword2}
              placeholder="비밀번호를 다시 적어주세요"
              type="password"
              onChange={e => setUserpassword2(e.target.value)}
            />
          </div>
          <LabelInput
            label="전화번호"
            value={usertel}
            placeholder="전화번호를 적어주세요"
            onChange={e => setUsertel(e.target.value)}
          />
          {ismissingvalue && (
            <p className="text-lg text-red-600">빈 칸을 채워주세요!</p>
          )}
        </div>
      </div>
      <div className={`w-full flex justify-center px-4`}>
        <Button label="회원 가입" onClick={handleRegisterButtonClick} />
      </div>
    </div>
  );
};

export default RegisterInfo;
