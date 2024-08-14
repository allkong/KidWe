import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';

interface FoodModalProps {
  isOpen: boolean;
  onClickClose: () => void;
  onDeleteClick: () => void;
}

const FoodModal = ({isOpen, onClickClose, onDeleteClick}: FoodModalProps) => {
  return (
    <ModalPortal>
      <Modal isOpen={isOpen}>
        <Modal.Header title="알림" />
        <Modal.Body>
          <div className="flex flex-col items-center justify-center w-full h-full py-10">
            <p>식단을 삭제하시겠습니까?</p>
            <p>삭제한 식단은 되돌릴 수 없습니다.</p>
          </div>
        </Modal.Body>
        <Modal.BottomButton
          size="large"
          label="취소"
          round="full"
          variant="negative"
          onClick={onClickClose}
        />
        <Modal.BottomButton
          size="large"
          label="삭제"
          round="full"
          onClick={onDeleteClick}
        />
        <Modal.Background onClick={onClickClose} />
      </Modal>
    </ModalPortal>
  );
};

export default FoodModal;
