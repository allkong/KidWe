import FoodInfomationItem from './FoodInfomationItem';
import {GetFood} from '@/types/food/GetFood';
import NoResult from '@/components/atoms/NoResult';

interface FoodListViewProps {
  food?: GetFood;
}

const FoodListView = ({food}: FoodListViewProps) => {
  return (
    <>
      {food ? (
        <div className="flex flex-col items-center justify-center w-full gap-3 h-fit">
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
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <NoResult text="등록된 식단이 없습니다" />
        </div>
      )}
    </>
  );
};

export default FoodListView;
