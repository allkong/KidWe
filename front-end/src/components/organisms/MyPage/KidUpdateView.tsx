import LabelInput from '@/components/atoms/Input/LabelInput';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import AllergyView from '@/components/organisms/Food/AllergyView';
import {ALLERGIES} from '@/constants/allergy';

const KidUpdateView = () => {
  return (
    <div className="flex-col w-full py-10 space-y-5 text-gray-300">
      <LabelInput label="자녀 이름" value="" placeholder="자녀 이름" />
      <div className="flex items-end justify-between gap-9 h-fit">
        <div className="flex-grow">
          <CalendarButton
            position="right"
            render={() => <LabelInput value="" label="생년월일" />}
          />
        </div>
        <div>
          <p className="mb-4">성별</p>
          <div className="flex flex-row items-start gap-2">
            <CheckBoxButton label="남" />
            <CheckBoxButton label="여" />
          </div>
        </div>
      </div>
      <AllergyView datas={ALLERGIES} />
    </div>
  );
};

export default KidUpdateView;
