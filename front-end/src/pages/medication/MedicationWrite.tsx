import {useState} from 'react';
import {getToday, getTomorrow, getDayAfterTomorrow} from '@/utils/dayjsPlugin';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import RadioCircleButton from '@/components/atoms/CheckBox/RadioCircleButton';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Select from '@/components/molecules/DropdownButton/Select';
import RadioCheckBoxButton from '@/components/atoms/CheckBox/RadioCheckBoxButton';
import AreaDivider from '@/components/atoms/Divider/AreaDivider';
// import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const MedicationWrite = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');

  const handleDateChange = (option: string) => {
    setSelectedDate(option);
  };

  const handleStorageChange = (option: string) => {
    setSelectedStorage(option);
  };

  console.log(selectedDate, selectedStorage);
  return (
    <div className="h-screen">
      <Header title="투약의뢰서" buttonType="back" />
      <div className={`${containerHeaderClass}`}>
        <div className="py-8 space-y-5 px-9">
          <div className="space-y-2">
            <p>투약일</p>
            <RadioCircleButton
              options={[
                {label: '오늘', date: getToday('M월 D일')},
                {label: '내일', date: getTomorrow('M월 D일')},
                {label: '모레', date: getDayAfterTomorrow('M월 D일')},
              ]}
              selectedOption={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <LabelInput label="증상" placeholder="예) 발열, 감기" />
          {/* 사진 선택 추가 */}
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
            <Select
              label="선택"
              options={['식사 직전', '식사 직후', '식후 30분', '취침 전']}
            />
          </div>
          <div className="space-y-2">
            <p>보관</p>
            <RadioCheckBoxButton
              options={['실온', '보관']}
              selectedOption={selectedStorage}
              onChange={handleStorageChange}
            />
          </div>

          <LabelInput label="비고" />
        </div>
        <AreaDivider />
      </div>
    </div>
  );
};

export default MedicationWrite;
