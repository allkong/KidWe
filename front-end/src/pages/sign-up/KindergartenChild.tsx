import React, {useEffect, useState} from 'react';
import Button from '@/components/atoms/Button/Button';
import {useNavigate} from 'react-router-dom';
import KindergartenCard from '@/components/atoms/KindergartenCard';
import LabelInput from '@/components/atoms/Input/LabelInput';
import AllergyView from '@/components/organisms/Food/AllergyView';
import {ALLERGIES, Allergy} from '@/constants/allergy';
import {useRecoilState} from 'recoil';
import {useMutation} from '@tanstack/react-query';
import {SignupGuardianState} from '@/recoil/atoms/signup/signupGuardian';
import {postGuardian} from '@/apis/signup/postGuardian';
import {toast, ToastContainer} from 'react-toastify';
import dayjs from 'dayjs';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import {Gender} from '@/enum/gender';
const genderItems = [
  {value: 'MALE', label: '남아'},
  {value: 'FEMALE', label: '여아'},
];

const KindergartenChild: React.FC = () => {
  const [childname, setChildname] = useState('');
  const [childbirth, setChildbirth] = useState(dayjs());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [datas, setDatas] = useState(ALLERGIES);
  const navigate = useNavigate();
  const [isStateUpdated, setIsStateUpdated] = useState(false);
  const [signupGuardian, setSignupGuardian] =
    useRecoilState(SignupGuardianState);
  const handleGenderChange = (gender: Gender) => {
    setSelectedGender(gender);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const signupChildMutate = useMutation({
    mutationFn: async () => {
      const {banName, ...postsignupGuardian} = signupGuardian;
      console.log(postsignupGuardian);
      console.log(banName);
      return postGuardian(postsignupGuardian);
    },
    onSuccess: data => {
      if (data === '성공') {
        navigate('/login');
      } else if (data === '실패') {
        toast.error('이메일 중복으로 인해 회원가입에 실패하였습니다.');
      } else {
        toast.error(data);
      }
    },
    onError: error => {
      toast.error(`회원가입에 실패했습니다: ${error.message}`);
    },
  });

  const handleCompletedButtonClick = () => {
    const formattedBirthday = childbirth.format('YYYY-MM-DD');
    setSignupGuardian(prevState => ({
      ...prevState,
      kidName: childname,
      birthday: formattedBirthday,
      gender: selectedGender as Gender,
      picture: typeof image === 'string' ? image : '',
      allergies: [''],
    }));
    setIsStateUpdated(true);
  };

  const handleAllergyChange = (updatedDatas: Allergy[]) => {
    setDatas(updatedDatas);
  };

  const handleBirthChange = () => {
    setIsCalendarOpen(true);
  };

  const handleDateChange = date => {
    setChildbirth(date);
    setIsCalendarOpen(false);
  };

  useEffect(() => {
    if (signupGuardian.banId == 0 || signupGuardian.kindergartenId == 0) {
      toast.error('잘못 들어오셨습니다!', {
        onClose: () => navigate('/signup/kindergarten/search'),
      });
    }

    if (isStateUpdated) {
      signupChildMutate.mutate();
      setIsStateUpdated(false);
    }
  }, [navigate, isStateUpdated, signupGuardian, signupChildMutate]);
  return (
    <div className="flex flex-col w-full h-full min-h-screen px-5 space-y-16">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        pauseOnFocusLoss
        limit={1}
      />
      <div className="flex space-x-2">
        <KindergartenCard kindergartenName={signupGuardian.banName} />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex flex-col items-center">
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden mb-4"
            id="fileInput"
          />
          <div
            className="flex items-center justify-center w-32 h-32 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            {image ? (
              <img
                src={image as string}
                alt="프로필 미리보기"
                className="object-cover w-full h-full rounded-lg "
              />
            ) : (
              <span className="text-gray-500">이미지 선택</span>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <LabelInput
            value={childname}
            placeholder="이름을 적어주세요"
            onChange={e => setChildname(e.target.value)}
          />
          {/* <LabelInput
            value={childbirth ? childbirth.format('YYYY-MM-DD') : ''}
            placeholder="클릭하여 생일을 입력해주세요"
            onChange={handleBirthChange}
          /> */}
          {/* <CustomCalendar
            defaultDate={childbirth}
            onChange={handleDateChange}
            activeStartDate={false}
          /> */}
          <CalendarButton
            render={() => (
              <LabelInput
                value={childbirth ? childbirth.format('YYYY-MM-DD') : ''}
                placeholder="클릭하여 생일을 입력해주세요"
                onChange={handleBirthChange}
              />
            )}
            defaultDate={childbirth}
            onClick={handleDateChange}
          />

          <div className="flex justify-center space-x-2">
            {genderItems.map((item, index) => (
              <Button
                key={index}
                variant={
                  selectedGender === item.value ? 'positive' : 'negative'
                }
                label={item.label}
                onClick={() => handleGenderChange(item.value)}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border rounded-lg">
        <h2 className="mt-2">알레르기</h2>
        <AllergyView datas={datas} onChangeData={handleAllergyChange} />
      </div>
      <div>
        <Button
          label="입력 완료"
          size="large"
          onClick={handleCompletedButtonClick}
        />
      </div>
    </div>
  );
};

export default KindergartenChild;
