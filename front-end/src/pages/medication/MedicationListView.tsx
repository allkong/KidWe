import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import NoResult from '@/components/atoms/NoResult';
import MonthDivider from '@/components/atoms/Divider/MonthDivider';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import WriteButton from '@/components/atoms/Button/WriteButton';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import dayjs from 'dayjs';
import {toKorM} from '@/utils/dayjsPlugin';
import {groupByDate} from '@/utils/groupByDate';
import {containerClass} from '@/styles/styles';

const MedicationListView = () => {
  // 프로필 추가 예정
  const MonthOfMedication = [
    {
      kidName: '정다빈',
      banName: '콜라반',
      kidDate: '2024-07-29',
    },
    {
      kidName: '변지환',
      banName: '펩시반',
      kidDate: '2024-07-29',
    },
    {
      kidName: '서지민',
      banName: '사이다반',
      kidDate: '2024-07-30',
    },
  ];

  const groupedData = groupByDate(MonthOfMedication);
  console.log(groupedData);
  console.log(Object.keys(groupedData));

  return (
    <div className="flex flex-col h-screen">
      <Header title={'투약의뢰서'} buttonType="back" />
      <DateNavigator title={toKorM()} />
      <div className={containerClass}>
        {MonthOfMedication.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <NoResult text="등록된 의뢰서가 없어요" />
          </div>
        ) : (
          Object.keys(groupedData).map(date => (
            <div key={date}>
              <MonthDivider text={`${dayjs(date).date()}일`} color="gray" />
              {groupedData[date].map((item, index) => (
                <UserCardItem
                  key={index}
                  profile=""
                  userName={item.kidName}
                  banName={item.banName}
                  cardType="basic"
                  onClick={() => {}}
                />
              ))}
            </div>
          ))
        )}
      </div>
      <WriteButton onClick={() => {}} />
      <NavigationBar />
    </div>
  );
};

export default MedicationListView;
