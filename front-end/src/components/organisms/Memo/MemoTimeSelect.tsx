import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {useState} from 'react';

const MemoTimeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleTimeChange = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">시간 선택</p>
        <p
          onClick={handleTimeChange}
          className="inline-block border-b border-gray-200 cursor-pointer"
        >
          7월 25일 오전 9:00
        </p>
      </div>
      <ModalPortal>
        <Modal isOpen={isOpen}>
          <Modal.Header title="시간 선택" />
          <Modal.Body></Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleModalClose}
            size="large"
            round="full"
            variant="negative"
          />
          <Modal.BottomButton
            label="등록"
            onClick={handleModalClose}
            size="large"
            round="full"
            variant="positive"
          />
          <Modal.Background onClick={handleModalClose} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default MemoTimeSelect;
