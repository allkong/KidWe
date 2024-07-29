import DateButton from '@/components/atoms/Button/DateButton';

const FoodDateNavigator = () => {
  return (
    <div className="flex items-center justify-center w-full gap-3 h-11 min-h-fit">
      <DateButton isSelected={true} />
      <DateButton />
      <DateButton />
      <DateButton />
      <DateButton />
    </div>
  );
};

export default FoodDateNavigator;
