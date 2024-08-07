import {useNavigate, useLocation, useParams} from 'react-router-dom';
import {useMedicationDetail} from '@/hooks/medication/useMedicationDetail';
import {useDeleteMedication} from '@/hooks/medication/useDeleteMedication';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import MedicationDetailItem from '@/components/molecules/Item/MedicationDetailItem';
import ConsentSignatureCard from '@/components/organisms/Signature/ConsentSignatureCard';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const MedicationDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = {...location.state};
  const {medicationId} = useParams();
  const deleteMutation = useDeleteMedication();

  const {data, error, isLoading} = useMedicationDetail(medicationId ?? '');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const medicationDetails = [
    {title: '증상', content: data.symptom, color: '#FFC36A'},
    {title: '이름', content: data.medicineName, color: '#FFEC9E'},
    {title: '종류', content: data.type, color: '#FFEC9E'},
    {title: '용량', content: data.numberOfDoses, color: '#FFEC9E'},
    {title: '횟수', content: data.capacity, color: '#FFEC9E'},
    {
      title: '시간',
      content: data.medicationExecuteTime,
      color: '#FFEC9E',
    },
    {title: '보관', content: data.storageMethod, color: '#FFEC9E'},
    {title: '비고', content: data.others, color: '#FFEC9E'},
    {title: '사진', imageUrl: data.medicineUrl, color: '#FFEC9E'},
  ].filter(item => item.content && item.content.trim() !== '');

  const handleMedicationDelete = () => {
    if (medicationId) {
      deleteMutation.mutate(medicationId, {
        onSuccess: () => {
          navigate('/medication');
        },
      });
    }
  };

  const options = [
    {
      text: '삭제하기',
      onClick: handleMedicationDelete,
    },
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
          options={options}
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
