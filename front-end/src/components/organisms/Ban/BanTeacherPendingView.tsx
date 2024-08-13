import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';
import {useState, useEffect} from 'react';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {getTeacherPending} from '@/apis/management/getTeacherPending';
import {putTeacherAccept} from '@/apis/management/putTeacherAccept';
import {TeacherInfo} from '@/types/management/TeacherInfo';
import {getKindergartenId} from '@/utils/userData';
const BanTeacherPendingView = () => {
  const [teacherAcceptList, setTeacherAcceptList] = useState<TeacherInfo[]>([]);
  // const [kindergartenId, setKindergartenId] = useState(getKindergartenId());
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId);
  // const navigate = useNavigate();
  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);
  const handleAcceptTeacher = async (id: number) => {
    try {
      await putTeacherAccept({id, accepted: true});
      if (kindergartenId) {
        const updatedList = await getTeacherPending(kindergartenId);
        setTeacherAcceptList(updatedList);
      }
    } catch (error) {
      console.error('Failed to accept teacher', error);
    }
  };
  const handleOpenNegativeModal = () => {
    setIsNegativeModalOpen(true);
  };

  const handleCloseNegativeModal = () => {
    setIsNegativeModalOpen(false);
  };

  useEffect(() => {
    const fetchTeacherAcceptList = async () => {
      try {
        if (kindergartenId) {
          const response = await getTeacherPending(kindergartenId);
          setTeacherAcceptList(response);
        }
      } catch (error) {
        console.error('Failed to featch teacher pending list', error);
      }
    };
    fetchTeacherAcceptList();
  }, [kindergartenId]);

  return (
    <div>
      {teacherAcceptList.map(teacher => (
        <UserCardItemWithButton
          key={teacher.memberId}
          profile=""
          userName={teacher.name}
          negativeLabel="거절"
          positiveLabel="수락"
          onClickNegative={() => {
            handleOpenNegativeModal();
          }}
          onClickPositive={() => {
            handleAcceptTeacher(teacher.memberId);
          }}
        />
      ))}
      <p>거절은 누르면 modal 띄우기!(완료)</p>
      <p>수락 누르면 teacher의 상태 변경!</p>
      <ModalPortal>
        <Modal isOpen={isNegativeModalOpen}>
          <Modal.Header title="알림" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center py-10 h-44">
              <p>대기 중인 교사를 거절하시겠습니까?</p>
              <p>
                거절한 요청은 복구할 수 <b>없습니다</b>
              </p>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleCloseNegativeModal}
            round="full"
            size="large"
            variant="negative"
          ></Modal.BottomButton>
          <Modal.BottomButton
            label="거절"
            onClick={handleCloseNegativeModal}
            round="full"
            size="large"
            variant="positive"
          ></Modal.BottomButton>
          <Modal.Background
            onClick={handleCloseNegativeModal}
          ></Modal.Background>
        </Modal>
      </ModalPortal>
    </div>
  );
};

export default BanTeacherPendingView;
