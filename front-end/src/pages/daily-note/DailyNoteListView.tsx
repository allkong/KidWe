import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
import {useDailyNoteList} from '@/hooks/daily-note/useDailyNoteList';
import {containerNavigatorClass} from '@/styles/styles';
import {toast, ToastContainer} from 'react-toastify';
import Spinner from '@/components/atoms/Loader/Spinner';
import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import NoResult from '@/components/atoms/NoResult';
import MonthDivider from '@/components/atoms/Divider/MonthDivider';
import ScheduledUserCard from '@/components/molecules/Item/ScheduledUserCard';
import WriteButton from '@/components/atoms/Button/WriteButton';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {RoleItem} from '@/enum/roleItem';

const DailyNoteListView = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf('month'));
  const navigate = useNavigate();

  const {data, isError, isLoading} = useDailyNoteList(
    1,
    4,
    currentMonth.year(),
    '08', // currentMonth.month() + 1,
    RoleItem.Teacher
  );

  const handleLeftClick = () => {
    setCurrentMonth(prev => prev.subtract(1, 'month').startOf('month'));
  };

  const handleRightClick = () => {
    setCurrentMonth(prev => prev.add(1, 'month').startOf('month'));
  };

  const handleUserItemClick = (dailyNoteId: number) => {
    navigate(`/daily-note/${dailyNoteId}`);
  };

  const handleWriteButtonClick = () => {
    navigate('/daily-note/write');
  };

  useEffect(() => {
    if (isError) {
      toast.error('데이터 로딩 실패');
    }
  }, [isError]);

  return (
    <div className="flex flex-col h-screen">
      {isLoading && <Spinner />}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        pauseOnFocusLoss
        limit={1}
      />
      <Header title="알림장" buttonType="close" />
      <DateNavigator
        title={currentMonth.format('YY년 M월')}
        onClickLeft={handleLeftClick}
        onClickRight={handleRightClick}
      />
      <div className={`${containerNavigatorClass} pt-[6.5rem]`}>
        {data &&
        Object.keys(data.dailyNoteListItemResponseDtos).length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <NoResult text="등록된 알림장이 없어요" />
          </div>
        ) : (
          data &&
          Object.keys(data.dailyNoteListItemResponseDtos).map(dateKey => (
            <div key={dateKey}>
              <MonthDivider text={`${dateKey}일`} color="gray" />
              {data.dailyNoteListItemResponseDtos[dateKey].map(item => {
                const isFutureTime = dayjs(item.stringSendTime).isAfter(
                  dayjs()
                );
                return (
                  <div
                    key={item.id}
                    onClick={() => handleUserItemClick(item.id)}
                  >
                    <ScheduledUserCard
                      userName={item.kid.name}
                      banName={item.writer.name}
                      writer={item.writer.role}
                      {...(isFutureTime && {
                        sendTime: dayjs(item.stringSendTime).format('HH:mm'),
                      })}
                    />
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
      <WriteButton onClick={handleWriteButtonClick} />
      <NavigationBar />
    </div>
  );
};

export default DailyNoteListView;
