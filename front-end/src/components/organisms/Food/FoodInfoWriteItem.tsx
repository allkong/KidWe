import TextArea from '@/components/atoms/Input/TextArea';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Tag from '@/components/atoms/Tag/Tag';

interface FoodInfoWriteItemProps {
  label?: string;
  allergies?: string[];
  onChangeAllergies?: (allergies: string[]) => void;
}

const FoodInfoWriteItem = ({
  label,
  allergies,
  onChangeAllergies,
}: FoodInfoWriteItemProps) => {
  const handleButtonClick = () => {
    // 로직 처리
    onChangeAllergies?.([]);
  };

  return (
    <div className="space-y-2 text-gray-300">
      <p>{label}</p>
      <div className="w-full h-20">
        <TextArea />
      </div>
      {allergies === undefined ? (
        <DashedButton onClick={handleButtonClick} label="알레르기 정보 추가" />
      ) : (
        <div className="flex flex-wrap w-full gap-2">
          {allergies.map((allergy, idx) => (
            <Tag key={idx} text={allergy} height="1.25rem" />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodInfoWriteItem;
