import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';

const FoodInfo = () => {
  return (
    <div className="box-border px-5">
      <DateNavigator title={'7월 1주차'} />
      <div>{/* 날짜 선택 요소 */}날짜</div>
      <div>{/* 메뉴 관련 요소 */}메뉴</div>
      <WriteButton onClick={() => {}} />
    </div>
  );
};

export default FoodInfo;
