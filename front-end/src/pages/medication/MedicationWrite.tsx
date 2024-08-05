import {useState, ChangeEvent} from 'react';
import {useRecoilState} from 'recoil';
import {medicationFormState} from '@/recoil/atoms/medication/medicationFormState';
import axiosInstance from '@/axiosInstance';
import {getToday, getTomorrow, getDayAfterTomorrow} from '@/utils/dayjsPlugin';
import {dataURLToBase64} from '@/utils/convertImageType';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import RadioCircleButton from '@/components/atoms/CheckBox/RadioCircleButton';
import LabelInput from '@/components/atoms/Input/LabelInput';
import ImageUpload from '@/components/atoms/Input/ImageUpload';
import Select from '@/components/molecules/DropdownButton/Select';
import RadioCheckBoxButton from '@/components/atoms/CheckBox/RadioCheckBoxButton';
import ConsentSection from '@/components/organisms/Signature/ConsentSection';
import AreaDivider from '@/components/atoms/Divider/AreaDivider';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';

const MedicationWrite = () => {
  const dateOptions = [
    {label: '오늘', date: getToday('YYYY-MM-DD')},
    {label: '내일', date: getTomorrow('YYYY-MM-DD')},
    {label: '모레', date: getDayAfterTomorrow('YYYY-MM-DD')},
  ];

  const timeOptions = [
    '식사 직전',
    '식사 직후',
    '식후 30분',
    '취침 전',
    '기타',
  ];

  const storageOptions = ['실온', '보관'];

  const [formState, setFormState] = useRecoilState(medicationFormState);

  const [selectedTimeOption, setSelectedTimeOption] = useState('');

  // 투약일
  const handleDateChange = (option: string) => {
    setFormState(prev => ({...prev, medicationExecuteDueDate: option}));
  };

  // 약 사진
  const handleImageChange = (image: string) => {
    setFormState(prev => ({
      ...prev,
      medicineUrl: image,
    }));
  };

  // 보관방법
  const handleStorageChange = (option: string) => {
    setFormState(prev => ({...prev, storageMethod: option}));
  };

  // 투약시간
  const handleTimeChange = (option: string) => {
    setSelectedTimeOption(option);
    setFormState(prev => ({...prev, medicationExecuteTime: option}));
  };

  // 서명 이미지
  const handleSignatureSave = (imageData: string) => {
    setFormState(prev => ({...prev, signUrl: dataURLToBase64(imageData)}));
  };

  // 입력 값 변경
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(formState);
  };

  return (
    <div className="h-screen">
      <Header title="투약의뢰서" buttonType="back" />
      <div className={`${containerHeaderClass}`}>
        <div className="py-8 space-y-5 px-9">
          <div className="space-y-2">
            <p>투약일</p>
            <RadioCircleButton
              options={dateOptions}
              selectedOption={formState.medicationExecuteDueDate}
              onChange={handleDateChange}
            />
          </div>
          <LabelInput
            label="증상"
            name="symptom"
            value={formState.symptom}
            onChange={handleInputChange}
            placeholder="예) 발열, 감기"
          />
          <ImageUpload onChange={handleImageChange} />
        </div>
        <AreaDivider />
        <div className="py-8 space-y-5 px-9">
          <LabelInput
            label="이름"
            name="medicineName"
            value={formState.medicineName}
            onChange={handleInputChange}
            placeholder="예) 처방약"
          />
          <LabelInput
            label="종류"
            name="type"
            value={formState.type}
            onChange={handleInputChange}
            placeholder="예) 물약, 가루약"
          />
          <LabelInput
            label="용량"
            name="capacity"
            value={formState.capacity}
            onChange={handleInputChange}
            placeholder="1회분 입력"
          />
          <LabelInput
            label="횟수"
            name="numberOfDoses"
            value={formState.numberOfDoses}
            onChange={handleInputChange}
            placeholder="예) 1일 2회분"
          />
          <div className="space-y-2">
            <p>시간</p>
            <Select
              label="선택"
              options={timeOptions}
              onChange={handleTimeChange}
            />
            {selectedTimeOption === '기타' && (
              <LabelInput
                name="medicationExecuteTime"
                value={formState.medicationExecuteTime}
                onChange={handleInputChange}
                placeholder="예) 식후 1시간"
              />
            )}
          </div>
          <div className="space-y-2">
            <p>보관</p>
            <RadioCheckBoxButton
              options={storageOptions}
              selectedOption={formState.storageMethod}
              onChange={handleStorageChange}
            />
          </div>
          <LabelInput
            name="others"
            value={formState.others}
            onChange={handleInputChange}
            label="비고"
          />
        </div>
        <AreaDivider />
        <div className="py-8 px-9">
          <ConsentSection
            text="금일 자녀의 투약을 선생님께 의뢰합니다."
            date="2024년 7월 17일"
            parentName="김부모"
            onClick={handleSignatureSave}
          />
          {formState.signUrl && (
            <div className="flex justify-end">
              <img
                src={formState.signUrl}
                className="mt-4 bg-gray-100 rounded-md w-60"
              />
            </div>
          )}
        </div>
      </div>
      <ButtonBar label="등록하기" onClick={handleFormSubmit} />
    </div>
  );
};

export default MedicationWrite;
