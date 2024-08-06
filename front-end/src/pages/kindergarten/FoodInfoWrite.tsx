import Button from '@/components/atoms/Button/Button';
import FoodInfoWriteItem from '@/components/organisms/Food/FoodInfoWriteItem';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerHeaderClass} from '@/styles/styles';
import dayjs from 'dayjs';
import {useLocation, useNavigate} from 'react-router-dom';
import {postFood} from '@/apis/food/postFood';
import {useMutation} from '@tanstack/react-query';
import {PostFood} from '@/types/food/PostFood';
import {useQuery} from '@tanstack/react-query';
import {getDailyFood} from '@/apis/food/getDailyFood';
import {useEffect, useRef, useState} from 'react';

const kindergartenId = 1;

const FoodInfoWrite = () => {
  const location = useLocation();
  const date = useRef(dayjs(location.state.date));
  const navigate = useNavigate();
  const [menu, setMenu] = useState<PostFood>({
    lunch: '',
    lunchAllergies: [],
    snack: '',
    snackAllergies: [],
    dinner: '',
    dinnerAllergies: [],
    menuDate: '',
  });

  const {data} = useQuery({
    queryKey: [
      'food',
      date.current.get('year'),
      date.current.get('month') + 1,
      date.current.get('date'),
    ],
    queryFn: () =>
      getDailyFood(
        kindergartenId,
        date.current.get('year'),
        date.current.get('month') + 1,
        date.current.get('date')
      ),
    enabled: !!date,
  });

  const foodMutate = useMutation({
    mutationFn: ({
      kindergartenId,
      menu,
    }: {
      kindergartenId: number;
      menu: PostFood;
    }) => postFood(kindergartenId, menu),
    onSuccess() {
      navigate('/kindergarten/food');
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setMenu({...data, menuDate: date.current.format('YYYY-MM-DD')});
    }
  }, [data, date]);

  const handleButtonClick = () => {
    foodMutate.mutate({
      kindergartenId: kindergartenId,
      menu,
    });
  };

  const handleChangeData = (
    value: string,
    allergies: string[],
    type: 'lunch' | 'snack' | 'dinner'
  ) => {
    if (type === 'lunch') {
      setMenu({...menu, lunch: value, lunchAllergies: allergies});
    } else if (type === 'snack') {
      setMenu({...menu, snack: value, snackAllergies: allergies});
    } else {
      setMenu({...menu, dinner: value, dinnerAllergies: allergies});
    }
  };

  return (
    <div className={`${containerHeaderClass} flex flex-col h-full`}>
      <Header title="메뉴 정보 등록" buttonType="back" />
      <div className="flex justify-end px-5 py-6 text-xs h-fit min-h-fit min-w-fit">
        <p>{date.current.format('YYYY-MM-DD (ddd)')}</p>
      </div>
      <div className="flex-grow px-5 py-5 space-y-6 overflow-y-scroll">
        <FoodInfoWriteItem
          label="lunch"
          food={menu.lunch}
          allergies={menu.lunchAllergies}
          onChange={handleChangeData}
        />
        <FoodInfoWriteItem
          label="snack"
          food={menu.snack}
          allergies={menu.snackAllergies}
        />
        <FoodInfoWriteItem
          label="dinner"
          food={menu.dinner}
          allergies={menu.dinnerAllergies}
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
