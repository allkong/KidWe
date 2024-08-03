import {useState} from 'react';
import {getToday, getTomorrow, getDayAfterTomorrow} from '@/utils/dayjsPlugin';
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
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleDateChange = (option: string) => {
    setSelectedDate(option);
  };

  const handleStorageChange = (option: string) => {
    setSelectedStorage(option);
  };

  const dateOptions = [
    {label: '오늘', date: getToday('M월 D일')},
    {label: '내일', date: getTomorrow('M월 D일')},
    {label: '모레', date: getDayAfterTomorrow('M월 D일')},
  ];

  const timeOptions = [
    '식사 직전',
    '식사 직후',
    '식후 30분',
    '취침 전',
    '기타',
  ];

  const storageOptions = ['실온', '보관'];

  console.log(selectedDate, selectedStorage);
  return (
    <div className="h-screen">
      <Header title="투약의뢰서" buttonType="back" />
      <div className={`${containerHeaderClass}`}>
        <div className="py-8 space-y-5 px-9">
          <div className="space-y-2">
            <p>투약일</p>
            <RadioCircleButton
              options={dateOptions}
              selectedOption={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <LabelInput label="증상" placeholder="예) 발열, 감기" />
          <ImageUpload onChange={setImage} />
        </div>
        <AreaDivider />
        <div className="py-8 space-y-5 px-9">
          <LabelInput label="이름" placeholder="예) 처방약" />
          <LabelInput label="종류" placeholder="예) 물약, 가루약" />
          <LabelInput label="용량" placeholder="1회분 입력" />
          <LabelInput label="횟수" placeholder="예) 1일 2회분" />
          {/* 기타 추가 */}
          <div className="w-1/2 space-y-2">
            <p>시간</p>
            <Select label="선택" options={timeOptions} />
          </div>
          <div className="space-y-2">
            <p>보관</p>
            <RadioCheckBoxButton
              options={storageOptions}
              selectedOption={selectedStorage}
              onChange={handleStorageChange}
            />
          </div>
          <LabelInput label="비고" />
        </div>
        <AreaDivider />
        <div className="py-8 px-9">
          <ConsentSection
            text="금일 자녀의 투약을 선생님께 의뢰합니다."
            date="2024년 7월 17일"
            parentName="김부모"
          />
        </div>
      </div>
      <ButtonBar label="등록하기" />
    </div>
  );
};

export default MedicationWrite;
