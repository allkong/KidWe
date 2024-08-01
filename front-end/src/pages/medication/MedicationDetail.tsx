import {useLocation} from 'react-router-dom';
// import dayjs from 'dayjs';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import MedicationDetailItem from '@/components/molecules/Item/MedicationDetailItem';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const MedicationDetail = () => {
  const location = useLocation();
  const userInfo = {...location.state};

  const kidOfMedication = {
    name: '프레나정',
    symptom: '감기, 발열',
    type: '가루약',
    capacity: '1일 2회',
    numberOfDoses: '5mg',
    medicationExecuteTime: '식후 30분',
    storageMethod: '상온',
    others: '없음',
    medicineUrl:
      'https://i.namu.wiki/i/hLA1I08DSb1fH9zY9GGU6Z0MepzJjqoHP9jLKVzQgG4HIq_ngWeblhZyuZ-_fs_X008ONqLkGWSNTaXcgRn2Ww.webp',
  };

  const medicationDetails = [
    {title: '증상', content: kidOfMedication.symptom, color: '#FFC36A'},
    {title: '이름', content: kidOfMedication.name, color: '#FFEC9E'},
    {title: '종류', content: kidOfMedication.type, color: '#FFEC9E'},
    {title: '용량', content: kidOfMedication.numberOfDoses, color: '#FFEC9E'},
    {title: '횟수', content: kidOfMedication.capacity, color: '#FFEC9E'},
    {
      title: '시간',
      content: kidOfMedication.medicationExecuteTime,
      color: '#FFEC9E',
    },
    {title: '보관', content: kidOfMedication.storageMethod, color: '#FFEC9E'},
    {title: '비고', content: kidOfMedication.others, color: '#FFEC9E'},
    {title: '사진', imageUrl: kidOfMedication.medicineUrl, color: '#FFEC9E'},
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header title={'투약의뢰서'} buttonType="back" />
      <div className={containerHeaderClass}>
        <UserCardItem
          profile=""
          userName={userInfo.kidName}
          banName={userInfo.banName}
          cardType="detail"
          onClick={() => {}}
        />
        <div className="px-10 py-10 space-y-5">
          {medicationDetails.map((item, index) => (
            <MedicationDetailItem
              key={index}
              color={item.color}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        {/* 서명 */}
        <div></div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default MedicationDetail;
