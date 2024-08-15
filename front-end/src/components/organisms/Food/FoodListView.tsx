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
        <>
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
