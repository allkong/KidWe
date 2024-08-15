import UserCardItem from '@/components/molecules/Item/UserCardItem';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {getTeacherAccept} from '@/apis/management/getTeacherAccept';
import {TeacherInfo} from '@/types/management/TeacherInfo';
import {getKindergartenId} from '@/utils/userData';
import {putTeacherDecline} from '@/apis/management/putTeacherDecline';

const BanTeacherAcceptView = () => {
  const [teacherAcceptList, setTeacherAcceptList] = useState<TeacherInfo[]>([]);
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId());
  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(
    null
  ); // 선택된 교사의 ID를 저장하는 상태
  const navigate = useNavigate();

  const handleDeclineTeacher = async (teacherId: number) => {
    try {
      await putTeacherDecline(teacherId);
      if (kindergartenId) {
        const updatedList = await getTeacherAccept(kindergartenId);
        setTeacherAcceptList(updatedList);
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
    const fetchTeacherAcceptList = async () => {
      try {
        console.log('kindergartenId', kindergartenId);
        if (kindergartenId) {
          const response = await getTeacherAccept(kindergartenId);
          setTeacherAcceptList(response);
        }
      } catch (error) {
        console.error('Failed to fetch teacher accept list', error);
      }
    };
    fetchTeacherAcceptList();
  }, [kindergartenId]);

  return (
    <div>
      {teacherAcceptList.map(teacher => (
        <UserCardItem
          key={teacher.memberId}
          cardType="detail"
          profile=""
          userName={teacher.name}
          options={[
            {
              text: '반 수정',
              onClick: () => {
                console.log('반 수정');
              },
            },
            {
              text: '퇴사 처리',
              onClick: () => {
                handleOpenNegativeModal(teacher.memberId);
              },
            },
          ]}
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

export default BanTeacherAcceptView;
