import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';
import {useRef, useState} from 'react';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import TextArea from '@/components/atoms/Input/TextArea';
import Select from '@/components/molecules/DropdownButton/Select';
import XSmallButton from '@/components/atoms/Button/XSmallButton';
import type {Attendance} from '@/types/attendance/Attendance';

interface AttendedKidsButtonViewProps {
  value?: Attendance[];
  onClickSelect?: () => void;
}

const AttendedKidsButtonView = ({
  value,
  onClickSelect,
}: AttendedKidsButtonViewProps) => {
  const [isPositiveModalOpen, setIsPositiveModalOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleOpenPositiveModal = () => {
    setIsPositiveModalOpen(true);
  };

  const handleClosePositiveModal = () => {
    setIsPositiveModalOpen(false);
  };

  const handleSubmitPositiveModal = () => {
    // 로직 처리
    setIsPositiveModalOpen(false);
  };

  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);

  const handleOpenNegativeModal = () => {
    setIsNegativeModalOpen(true);
  };

  const handleCloseNegativeModal = () => {
    setIsNegativeModalOpen(false);
  };

  const handleSubmitNegativeModal = () => {
    // 로직 처리
    window.alert(inputRef.current?.value);
    setIsNegativeModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-2 border-b border-gray-200 min-h-14">
        <div>
          <Select label="반 이름" size="small">
            <Select.Option text="장미반" />
          </Select>
        </div>
        <XSmallButton
          label="선택"
          onClick={() => {
            onClickSelect?.();
          }}
          variant="negative"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-fit">
        {value?.map(() => (
          <UserCardItemWithButton
            profile=""
            userName="test1"
            negativeLabel="결석"
            onClickNegative={handleOpenNegativeModal}
            positiveLabel="출석"
            onClickPositive={handleOpenPositiveModal}
          />
        ))}
      </div>
      <ModalPortal>
        <Modal isOpen={isPositiveModalOpen}>
          <Modal.Header title="알림" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center py-10">
              <p>체크한 원생들에 대해</p>
              <p>출석 처리를 하시겠습니까?</p>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleClosePositiveModal}
            round="full"
            size="large"
            variant="negative"
          ></Modal.BottomButton>
          <Modal.BottomButton
            label="확인"
            onClick={handleSubmitPositiveModal}
            round="full"
            size="large"
            variant="positive"
          ></Modal.BottomButton>
          <Modal.Background
            onClick={handleClosePositiveModal}
          ></Modal.Background>
        </Modal>
        <Modal isOpen={isNegativeModalOpen}>
          <Modal.Header title="출결내용 작성" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center py-10">
              <TextArea ref={inputRef} />
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
            label="확인"
            onClick={handleSubmitNegativeModal}
            round="full"
            size="large"
            variant="positive"
          ></Modal.BottomButton>
          <Modal.Background
            onClick={handleCloseNegativeModal}
          ></Modal.Background>
        </Modal>
      </ModalPortal>
    </>
  );
};

export default AttendedKidsButtonView;
