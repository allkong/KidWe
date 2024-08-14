import XSmallButton from '@/components/atoms/Button/XSmallButton';
import FoodInfomationItem from './FoodInfomationItem';
import {GetFood} from '@/types/food/GetFood';
import NoResult from '@/components/atoms/NoResult';

interface FoodListViewProps {
  food?: GetFood;
  onOpenModalClick: () => void;
  onUpdateClick: () => void;
}

const FoodListView = ({
  food,
  onOpenModalClick,
  onUpdateClick,
}: FoodListViewProps) => {
  return (
    <>
      {food ? (
        <>
          <div className="flex justify-end w-full gap-1">
            <XSmallButton label="삭제" onClick={onOpenModalClick} />
            <XSmallButton
              label="수정"
              variant="positive"
              onClick={onUpdateClick}
            />
          </div>
          <FoodInfomationItem
            variant="lunch"
            menu={food.lunch}
            allergies={food.lunchAllergies}
            kidAllergies={food.kidAllergyListOfLunch}
          />
          <FoodInfomationItem
            variant="snack"
            menu={food.snack}
            allergies={food.snackAllergies}
            kidAllergies={food.kidAllergyListOfSnack}
          />
          <FoodInfomationItem
            variant="dinner"
            menu={food.dinner}
            allergies={food.dinnerAllergies}
            kidAllergies={food.kidAllergyListOfDinner}
          />
        </>
      ) : (
        <NoResult text="등록된 식단이 없습니다" />
      )}
    </>
  );
};

export default FoodListView;
