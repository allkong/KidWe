import CheckListItem from '@/components/organisms/Check/CheckListItem';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import Modal from '@/components/organisms/Modal/Modal';
import {useState} from 'react';
import XSmallButton from '@/components/atoms/Button/XSmallButton';
import type {GetAttendance} from '@/types/attendance/GetAttendance';

interface AttendedKidsSelectViewProps {
  attendances?: GetAttendance[];
  onClickButton?: () => void;
}

const AttendedKidsSelectView = ({
  attendances,
  onClickButton,
}: AttendedKidsSelectViewProps) => {
  const [isNegativeModalOpen, setIsNegativeModalOpen] = useState(false);

  const handleCloseNegativeModal = () => {
    setIsNegativeModalOpen(false);
  };

  // const handleOpenNegativeModal = () => {
  //   setIsNegativeModalOpen(true);
  // };

  const handleSubmitNegativeModal = () => {
    // 로직 처리
    setIsNegativeModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-2 border-b border-gray-200 min-h-14">
        <div>
          <XSmallButton
            label="전체선택"
            onClick={() => {
              onClickButton?.();
            }}
            variant="negative"
          />
        </div>
        <div className="space-x-2">
          <XSmallButton
            label="취소"
            onClick={() => {
              onClickButton?.();
            }}
            variant="negative"
          />
          <XSmallButton
            label="출석"
            onClick={() => {
              onClickButton?.();
            }}
            variant="positive"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-fit">
        {attendances?.map(attendance => (
          <CheckListItem key={attendance.attendanceId} src="sd" />
        ))}
      </div>
      <ModalPortal>
        <Modal isOpen={isNegativeModalOpen}>
          <Modal.Header title="출결내용 작성" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center py-10">
              <p>체크한 원생들에 대해</p>
              <p>출석 처리를 하시겠습니까?</p>
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

export default AttendedKidsSelectView;
