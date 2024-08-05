import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import FoodInfomationItem from '@/components/organisms/Food/FoodInfomationItem';
import FoodDateNavigator from '@/components/organisms/Food/FoodDateNavigator';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {useNavigate} from 'react-router-dom';
import {containerNavigatorClass} from '@/styles/styles';

const FoodInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${containerNavigatorClass} box-border h-full px-5 overflow-y-auto`}
      >
        <Header title="급식 정보" buttonType="back" />
        <DateNavigator title={'7월 1주차'} />
        <FoodDateNavigator />
        <div className="flex justify-center gap-2 mb-16"></div>
        <div className="flex flex-col items-center mb-20 space-y-6">
          <FoodInfomationItem variant="lunch" />
          <FoodInfomationItem variant="snack" />
          <FoodInfomationItem variant="dinner" />
        </div>
        <NavigationBar />
      </div>
      <WriteButton onClick={() => navigate('/kindergarten/food/write')} />
    </>
  );
};

export default FoodInfo;
