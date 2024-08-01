import {useLocation} from 'react-router-dom';
// import dayjs from 'dayjs';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import MedicationDetailItem from '@/components/molecules/Item/MedicationDetailItem';
import ConsentSignatureCard from '@/components/organisms/Card/ConsentSignatureCard';
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
          options={['삭제하기']}
        />
        <div className="space-y-5 border-b py-7 px-9">
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
        <ConsentSignatureCard
          text="학부모가 요청한 투약의뢰서에 따른 책임은\n 학부모에게 있습니다."
          date="2024년 7월 11일"
          parentName="신형만"
          signatureUrl="https://habitual-sawfish-65b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2F67a96011-c560-4598-ba77-45845356442b%2FUntitled.png?table=block&id=e317e6e8-c9d3-477f-8bfa-036af6ecf325&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=2000&userId=&cache=v2"
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default MedicationDetail;
