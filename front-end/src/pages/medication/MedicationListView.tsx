import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import NoResult from '@/components/atoms/NoResult';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {toKorM} from '@/utils/dayjsPlugin';
import {containerClass} from '@/styles/styles';

const MedicationListView = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title={'투약의뢰서'} buttonType="back" />
      <DateNavigator title={toKorM()} />
      <div className={containerClass}>
        <div className="flex items-center justify-center h-full">
          <NoResult text="등록된 투약의뢰서가 없어요" />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default MedicationListView;
