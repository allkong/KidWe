import DashedButton from '@/components/atoms/Button/DashedButton';
import TextArea from '@/components/atoms/Input/TextArea';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import DashedRoundedButton from '@/components/atoms/Button/DashedRoundedButton';
import sunflower from '@/assets/sunflower.png';
import Modal from '../Modal/Modal';
import ModalPortal from '../Modal/ModalPortal';
import {useState} from 'react';

const KindergartenInfomationSelect = () => {
  const [isChildrenModalOpen, setIsChildrenModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);

  const handleCloseChildrenModal = () => {
    setIsChildrenModalOpen(false);
  };

  const handleOpenChildrenModal = () => {
    setIsChildrenModalOpen(true);
  };

  // const handleSubmitChildrenModal = () => {
  //   setIsChildrenModalOpen(false);
  // };

  const handleCloseLessonModal = () => {
    setIsLessonModalOpen(false);
  };

  const handleOpenLessonModal = () => {
    setIsLessonModalOpen(true);
  };

  // const handleSubmitLessonModal = () => {
  //   setIsLessonModalOpen(false);
  // };

  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">내용 선택</p>
        <p className="text-sm">원생 선택</p>
        <div className="flex flex-wrap gap-2 overflow-y-auto max-h-10">
          <ProfileImage src={sunflower}></ProfileImage>
          <DashedRoundedButton
            onClick={handleOpenChildrenModal}
          ></DashedRoundedButton>
        </div>
        <p className="text-sm">수업 선택</p>
        <DashedButton label="+" onClick={handleOpenLessonModal} />
        <p className="text-sm">메모</p>
        <div className="h-32">
          <TextArea />
        </div>
      </div>
      <ModalPortal>
        <Modal isOpen={isChildrenModalOpen}>
          <Modal.Header title="원생 선택" />
          <Modal.Body></Modal.Body>
          <Modal.Background onClick={handleCloseChildrenModal} />
        </Modal>
        <Modal isOpen={isLessonModalOpen}>
          <Modal.Header title="수업 선택" />
          <Modal.Body></Modal.Body>
          <Modal.Background onClick={handleCloseLessonModal} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default KindergartenInfomationSelect;
