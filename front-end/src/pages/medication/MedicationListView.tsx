import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
import {toKorM} from '@/utils/dayjsPlugin';
import {groupByDate} from '@/utils/groupByDate';
import {containerNavigatorClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import NoResult from '@/components/atoms/NoResult';
import MonthDivider from '@/components/atoms/Divider/MonthDivider';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import WriteButton from '@/components/atoms/Button/WriteButton';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

interface MedicationItem {
  medicationId: number;
  kidName: string;
  banName: string;
  kidDate: string;
}

const MedicationListView = () => {
  // 프로필 추가 예정
  const monthOfMedication: MedicationItem[] = [
    {
      medicationId: 1,
      kidName: '정다빈',
      banName: '콜라반',
      kidDate: '2024-07-29',
    },
    {
      medicationId: 2,
      kidName: '변지환',
      banName: '펩시반',
      kidDate: '2024-07-29',
    },
    {
      medicationId: 3,
      kidName: '서지민',
      banName: '사이다반',
      kidDate: '2024-07-30',
    },
  ];

  const groupedData = groupByDate(monthOfMedication);

  const navigate = useNavigate();
  const handleUserItemClick = (medicationId: number, item: MedicationItem) => {
    navigate(`/medication/${medicationId}`, {
      state: {
        kidName: item.kidName,
        banName: item.banName,
      },
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title={'투약의뢰서'} buttonType="close" />
      <DateNavigator title={toKorM()} />
      <div className={`${containerNavigatorClass} pt-[6.5rem]`}>
        {monthOfMedication.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <NoResult text="등록된 의뢰서가 없어요" />
          </div>
        ) : (
          Object.keys(groupedData).map(date => (
            <div key={date}>
              <MonthDivider text={`${dayjs(date).date()}일`} color="gray" />
              {groupedData[date].map(item => (
                <div
                  key={item.medicationId}
                  onClick={() => handleUserItemClick(item.medicationId, item)}
                >
                  <UserCardItem
                    profile=""
                    userName={item.kidName}
                    banName={item.banName}
                    cardType="basic"
                  />
                </div>
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
