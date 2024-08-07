import React, {useEffect, useState} from 'react';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {Signup} from '@/recoil/atoms/signup/Signup';

const RegisterInfo = () => {
  const [isShort, setIsShort] = useState(true);
  const [signupregister, setSignupRegister] = useRecoilState(Signup);
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [userpassword2, setUserpassword2] = useState('');
  const [usertel, setUsertel] = useState('');
  const [iswrongpasswordtype, setIsWrongPasswordType] = useState(false);
  const [iswrongemailtype, setIsWrongEmailType] = useState(false);
  const [ismissingvalue, setIsMissingValue] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // 이메일 정규 표현식 패턴

  const handleRegisterButtonClick = () => {
    // 이름과 전화번호가 빈 칸인지 확인
    if (
      !username.trim() ||
      !useremail.trim() ||
      !userpassword.trim() ||
      !userpassword2.trim() ||
      !usertel.trim()
    ) {
      console.log('값을 적어주세요');
      setIsMissingValue(true);
      return;
    }

    if (!emailPattern.test(useremail)) {
      setIsWrongEmailType(true);
      console.log('이메일을 다시 입력해주세요');
      return;
    } else {
      setIsWrongEmailType(false);
    }

    if (userpassword === userpassword2) {
      setSignupRegister(prevState => ({
        ...prevState,
        member: {
          ...prevState.member,
          name: username,
          tel: usertel,
          email: useremail,
          password: userpassword,
        },
      }));
    } else {
      setIsWrongPasswordType(true);
      console.log('비밀번호 다시해!');
    }

    if (signupregister.member.role === 'ROLE_DIRECTOR') {
      navigate('/signup/kindergarten/register');
    } else if (
      signupregister.member.role === 'ROLE_TEACHER' ||
      signupregister.member.role === 'ROLE_GUARDIAN'
    ) {
      navigate('/signup/kindergarten/search');
    } else {
      console.log('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mainContainer = document.querySelector('.main-container');
      if (mainContainer) {
        setIsShort(mainContainer.clientHeight < window.innerHeight);
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
      <div
        className={`${isShort ? 'absolute bottom-4' : 'relative mt-4'} w-full flex justify-center px-4`}
      >
        <Button label="회원 가입" onClick={handleRegisterButtonClick} />
        {/* 이렇게 회원 가입을 한 후 role에 따라 rendering 되는 page가 달라짐 */}
      </div>
    </div>
  );
};

export default RegisterInfo;
