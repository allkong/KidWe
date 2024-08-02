import DashedButton from '@/components/atoms/Button/DashedButton';
import TextArea from '@/components/atoms/Input/TextArea';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import DashedRoundedButton from '@/components/atoms/Button/DashedRoundedButton';
import sunflower from '@/assets/sunflower.png';

const KindergartenInfomationSelect = () => {
  return (
    <div className="space-y-2 text-gray-300">
      <p className="text-sm">원생 선택</p>
      <div className="flex flex-wrap gap-2 overflow-y-auto max-h-10">
        <ProfileImage src={sunflower}></ProfileImage>
        <DashedRoundedButton></DashedRoundedButton>
      </div>
      <p className="text-sm">수업 선택</p>
      <DashedButton label="+" />
      <p className="text-sm">메모</p>
      <div className="h-32">
        <TextArea />
      </div>
    </div>
  );
};

export default KindergartenInfomationSelect;
