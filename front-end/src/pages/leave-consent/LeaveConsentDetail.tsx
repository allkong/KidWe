import {useNavigate, useLocation, useParams} from 'react-router-dom';
import {useLeaveConsentDetail} from '@/hooks/leave-consent/useLeaveConsentDetail';
import {useDeleteLeaveConsent} from '@/hooks/leave-consent/useDeleteLeaveConsent';
import {containerHeaderClass} from '@/styles/styles';
import {toast, ToastContainer} from 'react-toastify';
import Spinner from '@/components/atoms/Loader/Spinner';
import Header from '@/components/organisms/Navigation/Header';
import UserCardItem from '@/components/molecules/Item/UserCardItem';
import DetailLabelItem from '@/components/molecules/Item/DetailLabelItem';
import DetailMultilineLabelItem from '@/components/molecules/Item/DetailMultilineLabelItem';
import ConsentSignatureCard from '@/components/organisms/Signature/ConsentSignatureCard';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const LeaveConsentDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = {...location.state};
  const {leaveConsentId} = useParams();
  const deleteMutation = useDeleteLeaveConsent();

  // const {data, error, isLoading} = useLeaveConsentDetail(leaveConsentId ?? '');

  // useEffect(() => {
  //   if (isError) {
  //     toast.error('데이터 로딩 실패');
  //   }
  // }, [isError]);

  // useEffect(() => {
  //   if (!isLoading && !data) {
  //     setTimeout(() => {
  //       navigate(-1);
  //     }, 1000);
  //   }
  // }, [isLoading, data, navigate]);

  const handleLeaveConsentDelete = () => {
    if (leaveConsentId) {
      deleteMutation.mutate(leaveConsentId, {
        onSuccess: () => {
          navigate('/leave-consent');
        },
      });
    }
  };

  const options = [
    {
      text: '삭제하기',
      onClick: handleLeaveConsentDelete,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* {isLoading && <Spinner />}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        limit={1}
      /> */}
      <Header title="귀가동의서" buttonType="back" />
      <div className={containerHeaderClass}>
        <UserCardItem
          profile=""
          userName={userInfo.kidName}
          banName={userInfo.banName}
          cardType="detail"
          options={options}
        />
        <div className="space-y-5 border-b py-7 px-9">
          <DetailLabelItem
            title="날짜"
            content="7월 29일 월요일"
            color="#FFC36A"
          />
          <DetailLabelItem title="시간" content="14:00" />
          <DetailMultilineLabelItem
            title="귀가 방법"
            content="오늘 일이 있어서 일찍 데리러 갈게요. 제가 직접 데리러 가겠습니다. 감사합니다."
          />
          <DetailMultilineLabelItem
            title="보호자"
            content="아버지"
            contact="010-1111-2222"
          />
          <DetailMultilineLabelItem
            title="보호자"
            content="어머니"
            contact="010-2222-3333"
          />
        </div>
        {/* 서명 */}
        <ConsentSignatureCard
          text="원아의 귀가를 위 보호자에게 인도해 주세요.\n변동이 있다면 사전에 반드시 연락을 취하겠습니다."
          date="2024년 7월 11일"
          parentName="신형만"
          signatureUrl="https://habitual-sawfish-65b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2F67a96011-c560-4598-ba77-45845356442b%2FUntitled.png?table=block&id=e317e6e8-c9d3-477f-8bfa-036af6ecf325&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=2000&userId=&cache=v2"
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default LeaveConsentDetail;
