import Button from '@/components/atoms/Button/Button';
import FoodInfoWriteItem from '@/components/organisms/Food/FoodInfoWriteItem';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerHeaderClass} from '@/styles/styles';
import dayjs from 'dayjs';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {PostFood} from '@/types/food/PostFood';
import {useState} from 'react';
import {useWriteDailyFood} from '@/hooks/food/useWriteDailyFood';

const kindergartenId = 1;

const FoodInfoWrite = () => {
  const [serachParams] = useSearchParams();
  const paramDate = serachParams.get('date'); // query로 date가 올바르지 않게 들어올 때 에러 처리 필요
  const date = dayjs(paramDate).format('YYYY-MM-DD');

  const navigate = useNavigate();
  const [menu, setMenu] = useState<PostFood>({
    lunch: '',
    lunchAllergies: [],
    snack: '',
    snackAllergies: [],
    dinner: '',
    dinnerAllergies: [],
    menuDate: date,
  });

  const foodMutate = useWriteDailyFood();

  const handleButtonClick = () => {
    foodMutate.mutate(
      {
        kindergartenId: kindergartenId,
        menu,
      },
      {
        onSuccess: () => {
          navigate('/food');
        },
      }
    );
  };

  const handleChangeData = (
    allergies: string[],
    type: 'lunch' | 'snack' | 'dinner'
  ) => {
    if (type === 'lunch') {
      setMenu({...menu, lunchAllergies: allergies});
    } else if (type === 'snack') {
      setMenu({...menu, snackAllergies: allergies});
    } else {
      setMenu({...menu, dinnerAllergies: allergies});
    }
  };

  const handleChangeInput = (
    value: string,
    type: 'lunch' | 'snack' | 'dinner'
  ) => {
    setMenu({...menu, [type]: value});
  };

  return (
    <div className={`${containerHeaderClass} flex flex-col h-full`}>
      <Header title="메뉴 정보 등록" buttonType="back" />
      <div className="flex justify-end px-5 py-6 text-xs h-fit min-h-fit min-w-fit">
        <p>{dayjs(date).format('YYYY-MM-DD (ddd)')}</p>
      </div>
      <div className="flex-grow px-5 py-5 space-y-6 overflow-y-scroll">
        <FoodInfoWriteItem
          label="lunch"
          food={menu.lunch}
          allergies={menu.lunchAllergies}
          onAllergyChange={handleChangeData}
          onInputChange={handleChangeInput}
        />
        <FoodInfoWriteItem
          label="snack"
          food={menu.snack}
          allergies={menu.snackAllergies}
          onAllergyChange={handleChangeData}
          onInputChange={handleChangeInput}
        />
        <FoodInfoWriteItem
          label="dinner"
          food={menu.dinner}
          allergies={menu.dinnerAllergies}
          onAllergyChange={handleChangeData}
          onInputChange={handleChangeInput}
        />
      </div>
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button onClick={handleButtonClick} label="작성 완료" size="large" />
      </div>
      <NavigationBar />
    </div>
  );
};

export default FoodInfoWrite;
