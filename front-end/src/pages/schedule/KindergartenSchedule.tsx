import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import ScheduleInfo from '@/components/organisms/Schedule/ScheduleInfo';
import Select from '@/components/molecules/DropdownButton/Select';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
import ScheduleAdd from '@/components/organisms/Schedule/ScheduleAdd';
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {useGetKindergartenInfo} from '@/hooks/schedule/useGetKindergartenInfo';
import Spinner from '@/components/atoms/Loader/Spinner';
import {toast} from 'react-toastify';

const kindergartenId = 1;

const KindergartenSchedule = () => {
  const [date, setDate] = useState(dayjs());

  const onChangeDate = (value: Dayjs) => {
    setDate(value);
  };

  useEffect(() => {
    refetch();
  }, [date]);

  const handleBeforeMonth = () => {
    setDate(date.subtract(1, 'month'));
  };

  const handleAfterMonth = () => {
    setDate(date.add(1, 'month'));
  };

  const {data, refetch, isLoading, isError} =
    useGetKindergartenInfo(kindergartenId);

  useEffect(() => {
    if (isError) {
      toast.error('오류 발생');
    }
  }, [isError]);

  return (
    <>
      {isLoading && <Spinner />}
      <Header title="유치원 일정" buttonType="back" />
      <DateNavigator
        title={date.format('YY년 MM월')}
        onClickLeft={handleBeforeMonth}
        onClickRight={handleAfterMonth}
      />
      <div
        className={`${containerNavigatorClass} items-center justify-center w-full px-10 space-y-4 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full h-16">
          <Select label="반" size="small">
            <Select.Option text="전체" />
            {data &&
              data.bans.map(ban => (
                <Select.Option key={ban.id} text={ban.name} />
              ))}
          </Select>
          <ScheduleAdd defaultDate={date} />
        </div>
        <div className="flex items-center justify-center flex-grow w-full">
          <div className="flex items-start justify-center max-w-full px-1 pt-10 pb-3 border border-gray-200 rounded-lg aspect-square">
            <CustomCalendar
              defaultDate={date}
              showNavigation={false}
              onChange={onChangeDate}
              activeStartDate={true}
            />
          </div>
        </div>
        <ScheduleInfo date={date} />
      </div>
      <NavigationBar />
    </>
  );
};

export default KindergartenSchedule;
