import PopupModal from '@/components/organisms/Modal/PopupModal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {useState} from 'react';

const MemoTimeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalSubmit = () => {
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
        <PopupModal
          isOpen={isOpen}
          title="설정"
          onCancelButtonClick={handleModalClose}
          onSubmitButtonClick={handleModalSubmit}
        >
          시간을 입력해주세요
        </PopupModal>
      </ModalPortal>
    </>
  );
};

export default MemoTimeSelect;
