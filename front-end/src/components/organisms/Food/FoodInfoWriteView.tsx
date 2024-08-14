import FoodInfoWriteItem from '@/components/organisms/Food/FoodInfoWriteItem';
import {PostFood} from '@/types/food/PostFood';

interface FoodInfoWriteViewProps {
  menu: PostFood;
  onChangeData: (
    allergies: string[],
    type: 'lunch' | 'snack' | 'dinner'
  ) => void;
  onChangeInput: (value: string, type: 'lunch' | 'snack' | 'dinner') => void;
}

const FoodInfoWriteView = ({
  menu,
  onChangeData,
  onChangeInput,
}: FoodInfoWriteViewProps) => {
  return (
    <>
      <FoodInfoWriteItem
        label="lunch"
        food={menu.lunch}
        allergies={menu.lunchAllergies}
        onAllergyChange={onChangeData}
        onInputChange={onChangeInput}
      />
      <FoodInfoWriteItem
        label="snack"
        food={menu.snack}
        allergies={menu.snackAllergies}
        onAllergyChange={onChangeData}
        onInputChange={onChangeInput}
      />
      <FoodInfoWriteItem
        label="dinner"
        food={menu.dinner}
        allergies={menu.dinnerAllergies}
        onAllergyChange={onChangeData}
        onInputChange={onChangeInput}
      />
    </>
  );
};

export default FoodInfoWriteView;
