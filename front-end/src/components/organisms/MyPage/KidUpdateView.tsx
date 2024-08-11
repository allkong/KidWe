import LabelInput from '@/components/atoms/Input/LabelInput';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import AllergyView from '@/components/organisms/Food/AllergyView';
import {ALLERGIES} from '@/constants/allergy';
// import ImageUploadButton from '@/components/molecules/Button/ImageUploadButton';
import XSmallButton from '@/components/atoms/Button/XSmallButton';

const KidUpdateView = () => {
  return (
    <div className="flex-col items-end w-full pt-10 text-gray-300">
      <div className="flex flex-col items-center justify-center w-full gap-3 py-3">
        {/* <ImageUploadButton userPicture="" onChangePicture={() => {}} /> */}
        <div className="w-fit">
          <XSmallButton label="삭제" />
        </div>
      </div>
      <LabelInput label="자녀 이름" value="" placeholder="자녀 이름" />
      <div className="flex items-end justify-between my-4 gap-9 h-fit">
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
      <p>알레르기 정보</p>
      <AllergyView datas={ALLERGIES} />
    </div>
  );
};

export default KidUpdateView;
