import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import MemoView from '@/components/organisms/Memo/MemoView';
import {GetMemo} from '@/types/memo/GetMemo';

interface MemoModalProps {
  isOpen: boolean;
  modalMemo?: GetMemo;
  onCloseClick: () => void;
  onDeleteClick: (value: string | undefined) => void;
  onUpdateClick: (value: string | undefined) => void;
}

const MemoModal = ({
  isOpen,
  modalMemo,
  onCloseClick,
  onDeleteClick,
  onUpdateClick,
}: MemoModalProps) => {
  return (
    <ModalPortal>
      <Modal isOpen={isOpen}>
        <Modal.Header title="관찰 메모" />
        <Modal.Body>
          <MemoView memo={modalMemo} />
        </Modal.Body>
        <Modal.BottomButton
          onClick={() => onUpdateClick(modalMemo?.id)}
          label="수정"
          variant="positive"
          size="large"
          round="full"
        ></Modal.BottomButton>
        <Modal.BottomButton
          onClick={() => onDeleteClick(modalMemo?.id)}
          label="삭제"
          variant="negative"
          size="large"
          round="full"
        ></Modal.BottomButton>
        <Modal.Background onClick={onCloseClick}></Modal.Background>
      </Modal>
    </ModalPortal>
  );
};

export default MemoModal;
