import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';
import {useState, useEffect} from 'react';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {getTeacherPending} from '@/apis/management/getTeacherPending';
import {putTeacherPending} from '@/apis/management/putTeacherPending';
import {TeacherInfo} from '@/types/management/TeacherInfo';
import {getKindergartenId} from '@/utils/userData';
const BanTeacherPendingView = () => {
  const [teacherPendingList, setTeacherPendingList] = useState<TeacherInfo[]>(
    []
  );
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId());
  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(
    null
  ); // 선택된 교사의 ID를 저장하는 상태

  const handleAcceptTeacher = async (id: number) => {
    try {
      await putTeacherPending({id, accepted: true});
      if (kindergartenId) {
        const updatedList = await getTeacherPending(kindergartenId);
        setTeacherPendingList(updatedList);
      }
    } catch (error) {
      console.error('Failed to Accept teacher', error);
    }
  };

  const handleDeclineTeacher = async (id: number) => {
    try {
      await putTeacherPending({id, accepted: false});
      if (kindergartenId) {
        const updatedList = await getTeacherPending(kindergartenId);
        setTeacherPendingList(updatedList);
      }
      handleCloseNegativeModal();
    } catch (error) {
      console.error('Failed to Decline teacher', error);
    }
  };

  const handleOpenNegativeModal = (teacherId: number) => {
    setSelectedTeacherId(teacherId);
    setIsNegativeModalOpen(true);
  };

  const handleCloseNegativeModal = () => {
    setIsNegativeModalOpen(false);
    setSelectedTeacherId(null);
  };

  useEffect(() => {
    const fetchTeacherPendingList = async () => {
      try {
        if (kindergartenId) {
          const response = await getTeacherPending(kindergartenId);
          setTeacherPendingList(response);
        }
      } catch (error) {
        console.error('Failed to featch teacher pending list', error);
      }
    };
    fetchTeacherPendingList();
  }, [kindergartenId]);

  return (
    <div>
      {teacherPendingList.map(teacher => (
        <UserCardItemWithButton
          key={teacher.memberId}
          profile=""
          userName={teacher.name}
          negativeLabel="거절"
          positiveLabel="수락"
          onClickNegative={() => {
            handleOpenNegativeModal(teacher.memberId);
          }}
          onClickPositive={() => {
            handleAcceptTeacher(teacher.memberId);
          }}
        />
      ))}
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
            onClick={() => {
              if (selectedTeacherId !== null) {
                handleDeclineTeacher(selectedTeacherId); // 선택된 교사의 ID로 거절 처리
              }
            }}
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
