import DateButton from '@/components/atoms/Button/DateButton';
import {Dayjs} from 'dayjs';

interface FoodDateNavigatorProps {
  date: Dayjs;
}

const add = [1, 2, 3, 4, 5];

const FoodDateNavigator = ({date}: FoodDateNavigatorProps) => {
  const startOfDate = date.startOf('week');

  return (
    <div className="flex items-center justify-center w-full gap-3 h-11 min-h-fit">
      {add.map((value, idx) => (
        <DateButton
          key={value}
          date={startOfDate.add(idx + 1, 'day')}
          isSelected={
            date.format('YYMMDD') ===
            startOfDate.add(idx + 1, 'day').format('YYMMDD')
          }
        />
      ))}
    </div>
  );
};

export default FoodDateNavigator;
