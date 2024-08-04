import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import ScheduleInfo from '@/components/organisms/Schedule/ScheduleInfo';
import Select from '@/components/molecules/Select/Select';
import Button from '@/components/atoms/Button/Button';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';

const KindergartenSchedule = () => {
  const kindergartens = ['전체', '햇살반', '꽃잎반'];

  return (
    <>
      <Header title="유치원 일정" buttonType="back" />
      <DateNavigator title="7월" />
      <div
        className={`${containerNavigatorClass} flex flex-col items-center justify-center w-full px-10 gap-2 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full h-16">
          <div>
            <Select label="반" size="small">
              {kindergartens &&
                kindergartens.map((data, idx) => (
                  <Select.Option key={idx} text={data} />
                ))}
            </Select>
          </div>
          <div>
            <Button
              label="일정 등록"
              round="full"
              size="small"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow w-full">
          <div className="max-w-full px-1 pt-10 pb-3 border border-gray-200 rounded-lg aspect-square">
            <CustomCalendar showNavigation={false} />
          </div>
        </div>
        <ScheduleInfo />
      </div>
      <NavigationBar />
    </>
  );
};

export default KindergartenSchedule;
