import XSmallButton from '@/components/atoms/Button/XSmallButton';

interface FoodModifyButtonProps {
  onOpenModalClick: () => void;
  onUpdateClick: () => void;
}

const FoodModifyButton = ({
  onOpenModalClick,
  onUpdateClick,
}: FoodModifyButtonProps) => {
  return (
    <div>
      <div className="flex justify-end w-full gap-1">
        <XSmallButton label="삭제" onClick={onOpenModalClick} />
        <XSmallButton label="수정" variant="positive" onClick={onUpdateClick} />
      </div>
    </div>
  );
};

export default FoodModifyButton;
