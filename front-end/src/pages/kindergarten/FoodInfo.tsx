import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import FoodInfomationItem from '@/components/organisms/Food/FoodInfomationItem';
import FoodDateNavigator from '@/components/organisms/Food/FoodDateNavigator';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {useNavigate} from 'react-router-dom';
import {containerNavigatorClass} from '@/styles/styles';
import NoResult from '@/components/atoms/NoResult';
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {getDailyFood} from '@/apis/food/getDailyFood';
import {useQuery} from '@tanstack/react-query';
import {GetFood} from '@/types/food/GetFood';
import weekOfYear from 'dayjs/plugin/weekOfYear';
// import Spinner from '@/components/atoms/Loader/Spinner';

dayjs.extend(weekOfYear);

const kindergartenId = 1;

function getWeekOfMonth(date: Dayjs) {
  const startOfMonth = date.startOf('month');
  const startWeekCount = startOfMonth.week();
  const currentWeekCount = date.week();
  return currentWeekCount - startWeekCount + 1;
}

const FoodInfo = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState(dayjs());

  const [food, setFood] = useState<GetFood>();

  const {data} = useQuery({
    queryKey: [
      'food',
      date.get('year'),
      date.get('month') + 1,
      date.get('date'),
    ],
    queryFn: () =>
      getDailyFood(
        kindergartenId,
        date.get('year'),
        date.get('month') + 1,
        date.get('date')
      ),
  });

  useEffect(() => {
    setFood(data);
  }, [data]);

  const handleLeftClick = () => {
    setDate(date.subtract(1, 'week'));
  };

  const handleRightClick = () => {
    setDate(date.add(1, 'week'));
  };

  const handleDateChange = (value: Dayjs) => {
    setDate(value);
  };

  const moveToWrite = () => {
    navigate('/kindergarten/food/write', {
      state: {date: date.format('YYYY-MM-DD')},
    });
  };

  return (
    <>
      {/* {isLoading && <Spinner />} */}
      <div
        className={`${containerNavigatorClass} flex flex-col items-center justify-center box-border h-full px-5 overflow-y-auto`}
      >
        <Header title="급식 정보" buttonType="back" />
        <DateNavigator
          title={`${date.format('M월')} ${getWeekOfMonth(date)}주차`}
          onClickLeft={handleLeftClick}
          onClickRight={handleRightClick}
        />

        <div className="flex justify-center gap-2 mb-16">
          <FoodDateNavigator date={date} onClick={handleDateChange} />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow mb-20 space-y-6">
          {food ? (
            <>
              <FoodInfomationItem
                variant="lunch"
                menu={food.lunch}
                allergies={food.lunchAllergies}
              />
              <FoodInfomationItem
                variant="snack"
                menu={food.snack}
                allergies={food.snackAllergies}
              />
              <FoodInfomationItem
                variant="dinner"
                menu={food.dinner}
                allergies={food.dinnerAllergies}
              />
            </>
          ) : (
            <NoResult text="등록된 식단이 없습니다" />
          )}
        </div>
        <NavigationBar />
      </div>
      <WriteButton onClick={() => moveToWrite()} />
    </>
  );
};

export default FoodInfo;
