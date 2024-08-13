import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';
import {useState, useEffect} from 'react';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {getChildPending} from '@/apis/management/getChildPending';
import {putChildPending} from '@/apis/management/putChildPending';
import {putChildDecline} from '@/apis/management/putChildDecline';
import {ChildInfo} from '@/types/management/ChildInfo';
import {getKindergartenId} from '@/utils/userData';
const BanChildPendingView = () => {
  const [childPendingList, setChildPendingList] = useState<ChildInfo[]>([]);
  const [kindergartenId, setKindergartenId] = useState(getKindergartenId());
  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);
  const [selectedChildId, setSelectedChildId] = useState<number | null>(null); // 선택된 아이의 ID를 저장하는 상태

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

  const handleDeclineChild = async (kidId: number) => {
    try {
      await putChildDecline(kidId);
      if (kindergartenId) {
        const updatedList = await getChildPending(kindergartenId);
        setChildPendingList(updatedList);
      }
      handleCloseNegativeModal();
    } catch (error) {
      console.error('Failed to Decline child', error);
    }
  };

  const handleOpenNegativeModal = (kidId: number) => {
    setSelectedChildId(kidId);
    setIsNegativeModalOpen(true);
  };

  const handleCloseNegativeModal = () => {
    setIsNegativeModalOpen(false);
    setSelectedChildId(null);
  };

  useEffect(() => {
    const fetchChildPendingList = async () => {
      try {
        if (kindergartenId) {
          const response = await getChildPending(kindergartenId);
          setChildPendingList(response);
        }
      } catch (error) {
        console.error('Failed to featch child pending list', error);
      }
    };
    fetchChildPendingList();
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
            handleOpenNegativeModal(child.kidId);
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
              <p>대기 중인 아이를 거절하시겠습니까?</p>
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
              if (selectedChildId !== null) {
                handleDeclineChild(selectedChildId);
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

export default BanChildPendingView;
