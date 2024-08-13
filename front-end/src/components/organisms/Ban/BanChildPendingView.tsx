import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';
import {useState, useEffect} from 'react';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {getChildPending} from '@/apis/management/getChildPending';
import {putChildPending} from '@/apis/management/putChildPending';
import {ChildInfo} from '@/types/management/ChildInfo';
import {getKindergartenId} from '@/utils/userData';
const BanChildPendingView = () => {
  const [childPendingList, setChildPendingList] = useState<ChildInfo[]>([]);
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId());
  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);

  const handleAcceptChild = async (id: number) => {
    try {
      await putChildPending({id, accepted: true});
      if (kindergartenId) {
        const updatedList = await getChildPending(kindergartenId);
        setChildPendingList(updatedList);
      }
    } catch (error) {
      console.error('Failed to accept child', error);
    }
  };
  const handleOpenNegativeModal = () => {
    setIsNegativeModalOpen(true);
  };

  const handleCloseNegativeModal = () => {
    setIsNegativeModalOpen(false);
  };

  useEffect(() => {
    const fetchTeacherPendingList = async () => {
      try {
        if (kindergartenId) {
          const response = await getChildPending(kindergartenId);
          setChildPendingList(response);
        }
      } catch (error) {
        console.error('Failed to featch child pending list', error);
      }
    };
    fetchTeacherPendingList();
  }, [kindergartenId]);

  return (
    <div>
      {childPendingList.map(child => (
        <UserCardItemWithButton
          key={child.kidId}
          profile=""
          userName={child.name}
          negativeLabel="거절"
          positiveLabel="수락"
          onClickNegative={() => {
            handleOpenNegativeModal();
          }}
          onClickPositive={() => {
            handleAcceptChild(child.kidId);
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

export default BanChildPendingView;
