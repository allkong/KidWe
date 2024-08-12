import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import ScheduleInfo from '@/components/organisms/Schedule/ScheduleInfo';
import Select from '@/components/molecules/DropdownButton/Select';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
import ScheduleAdd from '@/components/organisms/Schedule/ScheduleAdd';
import {useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {useGetKindergartenInfo} from '@/hooks/schedule/useGetKindergartenInfo';
import {useLoading} from '@/hooks/loading/useLoading';
import {getKindergartenId, getMemberRole} from '@/utils/userData';
import {useNavigate, useSearchParams} from 'react-router-dom';

const KindergartenSchedule = () => {
  const [searchParams] = useSearchParams();
  const paramDate = searchParams.get('date');
  let date = dayjs(paramDate);
  if (!date.isValid()) {
    date = dayjs();
  }

  const navigate = useNavigate();

  const onChangeDate = (value: Dayjs) => {
    const newDate = value.format('YYYY-MM-DD');
    navigate({
      pathname: '/schedule',
      search: `?date=${newDate}`,
    });
  };

  const handleBeforeMonth = () => {
    navigate({
      pathname: '/schedule',
      search: `?date=${date.subtract(1, 'month').format('YYYY-MM-DD')}`,
    });
  };

  const handleAfterMonth = () => {
    navigate({
      pathname: '/schedule',
      search: `?date=${date.add(1, 'month').format('YYYY-MM-DD')}`,
    });
  };

  const {data, refetch, isLoading} = useGetKindergartenInfo(
    getKindergartenId()!
  );
  useLoading(isLoading);

  useEffect(() => {
    refetch();
  }, [date, refetch]);

  return (
    <>
      <Header title="유치원 일정" buttonType="close" />
      <DateNavigator
        title={date.format('YY년 MM월')}
        onClickLeft={handleBeforeMonth}
        onClickRight={handleAfterMonth}
      />
      <div
        className={`${containerNavigatorClass} items-center justify-center w-full px-10 space-y-4 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full h-16">
          {getMemberRole() !== 'ROLE_GUARDIAN' && (
            <>
              {getMemberRole() === 'ROLE_DIRECTOR' && (
                <>
                  <Select label="반" size="small">
                    <Select.Option text="전체" />
                    {data &&
                      data.bans.map(ban => (
                        <Select.Option key={ban.id} text={ban.name} />
                      ))}
                  </Select>
                </>
              )}
              <ScheduleAdd defaultDate={date} refetch={refetch} />
            </>
          )}
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
