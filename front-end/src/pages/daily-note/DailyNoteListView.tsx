// import {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import dayjs from 'dayjs';
// import {groupByDate} from '@/utils/groupByDate';

// import {containerNavigatorClass} from '@/styles/styles';
// import Header from '@/components/organisms/Navigation/Header';
// import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
// import NoResult from '@/components/atoms/NoResult';
// import MonthDivider from '@/components/atoms/Divider/MonthDivider';
// import UserCardItem from '@/components/molecules/Item/UserCardItem';
// import WriteButton from '@/components/atoms/Button/WriteButton';
// import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

// const DailyNoteListView = () => {
//   const [currentMonth, setCurrentMonth] = useState(dayjs().startOf('month'));
//   const navigate = useNavigate();

//   //   const {data, error, isLoading} = useDailyNoteList(
//   //     1,
//   //     currentMonth.year(),
//   //     currentMonth.month() + 1,
//   //     'ROLE_DIRECTOR'
//   //   );

//   const handleLeftClick = () => {
//     setCurrentMonth(prev => prev.subtract(1, 'month').startOf('month'));
//   };

//   const handleRightClick = () => {
//     setCurrentMonth(prev => prev.add(1, 'month').startOf('month'));
//   };

//   const handleUserItemClick = (dailyNoteId: number, item: DailyNoteItem) => {
//     navigate(`/daily-note/${dailyNoteId}`, {
//       state: {
//         kidName: item.kidName,
//         banName: item.banName,
//       },
//     });
//   };

//   const handleWriteButtonClick = () => {
//     navigate('/medication/write');
//   };

//   //   if (isLoading) {
//   //     return <div>Loading...</div>;
//   //   }

//   //   if (error) {
//   //     return <div>Error loading data</div>;
//   //   }

//   const groupedData = groupByDate(data ?? []);

//   return (
//     <div className="flex flex-col h-screen">
//       <Header title="알림장" buttonType="close" />
//       <DateNavigator
//         title={currentMonth.format('YY년 M월')}
//         onClickLeft={handleLeftClick}
//         onClickRight={handleRightClick}
//       />
//       <div className={`${containerNavigatorClass} pt-[6.5rem]`}>
//         {data && data.length === 0 ? (
//           <div className="flex items-center justify-center h-full">
//             <NoResult text="등록된 알림장이 없어요" />
//           </div>
//         ) : (
//           Object.keys(groupedData).map(date => (
//             <div key={date}>
//               <MonthDivider text={`${dayjs(date).date()}일`} color="gray" />
//               {groupedData[date].map(item => (
//                 <div
//                   key={item.medicationId}
//                   onClick={() => handleUserItemClick(item.medicationId, item)}
//                 >
//                   <UserCardItem
//                     profile={item.profileImage || ''}
//                     userName={item.kidName}
//                     banName={item.banName}
//                     cardType="basic"
//                   />
//                 </div>
//               ))}
//             </div>
//           ))
//         )}
//       </div>
//       <WriteButton onClick={handleWriteButtonClick} />
//       <NavigationBar />
//     </div>
//   );
// };

// export default DailyNoteListView;
