import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
import {useDailyNoteList} from '@/hooks/daily-note/useDailyNoteList';
import {containerNavigatorClass} from '@/styles/styles';
import Spinner from '@/components/atoms/Loader/Spinner';
import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import NoResult from '@/components/atoms/NoResult';
import MonthDivider from '@/components/atoms/Divider/MonthDivider';
import ScheduledUserCard from '@/components/molecules/Item/ScheduledUserCard';
import WriteButton from '@/components/atoms/Button/WriteButton';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {RoleItem} from '@/enum/roleItem';
import {getMemberRole, getKidId, getBanId, getMemberId} from '@/utils/userData';

const DailyNoteListView = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf('month'));
  const navigate = useNavigate();

  const memberRole = getMemberRole() as RoleItem;
  let id: number | null = 0;
  if (memberRole === RoleItem.Guardian) {
    id = getKidId();
  } else if (memberRole === RoleItem.Teacher) {
    id = getBanId();
  } else if (memberRole === RoleItem.Director) {
    // 선택한 반 id로 변경
    id = 1;
  }

  const {data, isLoading} = useDailyNoteList(
    id!,
    getMemberId()!,
    currentMonth.year(),
    '08', // currentMonth.month() + 1,
    memberRole
  );

  const sortedData =
    data &&
    Object.keys(data.dailyNoteListItemResponseDtos)
      .map(key => Number(key))
      .sort((a, b) => b - a)
      .map(key => ({
        day: key,
        items: data.dailyNoteListItemResponseDtos[key.toString()],
      }));

  const handleLeftClick = () => {
    setCurrentMonth(prev => prev.subtract(1, 'month').startOf('month'));
  };

  const handleRightClick = () => {
    setCurrentMonth(prev => prev.add(1, 'month').startOf('month'));
  };

  const handleUserItemClick = (dailyNoteId: number) => {
    navigate(`/daily-notes/${dailyNoteId}`);
  };

  const handleWriteButtonClick = () => {
    navigate('/daily-notes/write');
  };

  return (
    <div className="flex flex-col h-screen">
      {isLoading && <Spinner />}
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
          sortedData &&
          sortedData.map(({day, items}) => (
            <div key={day}>
              <MonthDivider text={`${day}일`} color="gray" />
              {items.map(item => {
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
