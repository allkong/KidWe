import Button from '@/components/atoms/Button/Button';
import FoodInfoWriteItem from '@/components/organisms/Food/FoodInfoWriteItem';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerHeaderClass} from '@/styles/styles';

const FoodInfoWrite = () => {
  return (
    <div className={`${containerHeaderClass} flex flex-col h-full`}>
      <Header title="메뉴 정보 등록" buttonType="back" />
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
      <NavigationBar />
    </div>
  );
};

export default FoodInfoWrite;
