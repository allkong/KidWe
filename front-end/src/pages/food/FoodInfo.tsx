import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import FoodInfomationItem from '@/components/organisms/Food/FoodInfomationItem';
import FoodDateNavigator from '@/components/organisms/Food/FoodDateNavigator';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {useNavigate} from 'react-router-dom';
import {containerNavigatorClass} from '@/styles/styles';
import NoResult from '@/components/atoms/NoResult';
import dayjs, {Dayjs} from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import {useGetDailyFood} from '@/hooks/food/useGetDailyFood';
import {useLoading} from '@/hooks/loading/useLoading';
import {getKindergartenId, getMemberRole} from '@/utils/userData';
import {useGetDateBySearchParam} from '@/hooks/useGetDateBySearchParam';

dayjs.extend(weekOfYear);

function getWeekOfMonth(date: Dayjs) {
  const startOfMonth = date.startOf('month');
  const startWeekCount = startOfMonth.week();
  const currentWeekCount = date.week();
  return currentWeekCount - startWeekCount + 1;
}

const FoodInfo = () => {
  const navigate = useNavigate();
  const date = useGetDateBySearchParam();

  const {data: food, isLoading} = useGetDailyFood(getKindergartenId()!, date);
  useLoading(isLoading);

  const handleLeftClick = () => {
    navigate({
      pathname: '/foods',
      search: `?date=${date.subtract(1, 'week').format('YYYY-MM-DD')}`,
    });
  };

  const handleRightClick = () => {
    navigate({
      pathname: '/foods',
      search: `?date=${date.add(1, 'week').format('YYYY-MM-DD')}`,
    });
  };

  const handleDateChange = (value: Dayjs) => {
    navigate({
      pathname: '/foods',
      search: `?date=${value.format('YYYY-MM-DD')}`,
    });
  };

  const moveToWrite = () => {
    navigate({
      pathname: 'write',
      search: `date=${date.format('YYYY-MM-DD')}`,
    });
  };

  return (
    <>
      <div
        className={`${containerNavigatorClass} flex flex-col items-center justify-center box-border h-screen px-5 overflow-y-auto`}
      >
        <Header title="급식 정보" buttonType="close" />
        <DateNavigator
          title={`${date.format('M월')} ${getWeekOfMonth(date)}주차`}
          onClickLeft={handleLeftClick}
          onClickRight={handleRightClick}
        />

        <div className="flex justify-center gap-2 mb-4 w-fit h-fit">
          <FoodDateNavigator date={date} onClick={handleDateChange} />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow mb-20 space-y-6">
          {food ? (
            <>
              <FoodInfomationItem
                variant="lunch"
                menu={food.lunch}
                allergies={food.lunchAllergies}
                kidAllergies={food.kidAllergyListOfLunch}
                onClick={moveToWrite}
              />
              <FoodInfomationItem
                variant="snack"
                menu={food.snack}
                allergies={food.snackAllergies}
                kidAllergies={food.kidAllergyListOfSnack}
                onClick={moveToWrite}
              />
              <FoodInfomationItem
                variant="dinner"
                menu={food.dinner}
                allergies={food.dinnerAllergies}
                kidAllergies={food.kidAllergyListOfDinner}
                onClick={moveToWrite}
              />
            </>
          ) : (
            <NoResult text="등록된 식단이 없습니다" />
          )}
        </div>
        <NavigationBar />
      </div>
      {getMemberRole() !== 'ROLE_GUARDIAN' && (
        <WriteButton onClick={() => moveToWrite()} />
      )}
    </>
  );
};

export default FoodInfo;
