import Button from '@/components/atoms/Button/Button';
import FoodInfoWriteItem from '@/components/organisms/Food/FoodInfoWriteItem';

const FoodInfoWrite = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end px-5 py-6 text-xs h-fit min-h-fit min-w-fit">
        날짜 선택
      </div>
      <div className="flex-grow px-5 py-5 space-y-6 overflow-y-scroll">
        <FoodInfoWriteItem label="중식" />
        <FoodInfoWriteItem label="간식" />
        <FoodInfoWriteItem label="석식" />
      </div>
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button onClick={() => {}} label="작성 완료" size="large" />
      </div>
    </div>
  );
};

export default FoodInfoWrite;
