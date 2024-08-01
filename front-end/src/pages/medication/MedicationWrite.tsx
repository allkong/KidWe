import {getToday, getTomorrow, getDayAfterTomorrow} from '@/utils/dayjsPlugin';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import CircleButton from '@/components/atoms/Button/CircleButton';
import LabelInput from '@/components/atoms/Input/LabelInput';
import AreaDivider from '@/components/atoms/Divider/AreaDivider';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const MedicationWrite = () => {
  return (
    <div className="h-screen">
      <Header title="투약의뢰서" buttonType="back" />
      <div className={`${containerHeaderClass}`}>
        <div className="py-8 space-y-5 px-9">
          <div className="space-y-2">
            <p>투약일</p>
            <div className="flex flex-row space-x-3">
              <CircleButton label="오늘" date={getToday('M월 D일')} />
              <CircleButton label="내일" date={getTomorrow('M월 D일')} />
              <CircleButton
                label="모레"
                date={getDayAfterTomorrow('M월 D일')}
              />
            </div>
          </div>
          <LabelInput label="증상" placeholder="예) 발열, 감기" />
          {/* 사진 선택 추가 */}
        </div>
        <AreaDivider />
        <div className="py-8 space-y-5 px-9">
          <LabelInput label="이름" placeholder="예) 처방약" />
          <LabelInput label="종류" placeholder="예) 물약, 가루약" />
          <LabelInput label="횟수" placeholder="예) 1일 2회분" />
          {/* 시간, 보관 추가 */}
          <LabelInput label="비고" />
        </div>
        <AreaDivider />
      </div>
      <NavigationBar />
    </div>
  );
};

export default MedicationWrite;
