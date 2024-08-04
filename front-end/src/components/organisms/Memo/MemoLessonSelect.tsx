import DashedButton from '@/components/atoms/Button/DashedButton';
import {useState} from 'react';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal/Modal';
import Input from '@/components/atoms/Input/Input';
import CheckListItem from '../Check/CheckListItem';
// import {memoState} from '@/recoil/atoms/memo/memo';
// import {useRecoilState} from 'recoil';

const lessons = ['1', '2'];

const MemoLessonSelect = () => {
  // const [_, setMemo] = useRecoilState(memoState);

  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);

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
      <p className="text-sm">수업 선택</p>
      <DashedButton label="+" onClick={handleOpenLessonModal} />
      <p className="text-sm">메모</p>
      <ModalPortal>
        <Modal isOpen={isLessonModalOpen}>
          <Modal.Header title="수업 선택" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 py-6">
              <div className="box-border w-full px-6 h-fit">
                <Input placeholder="수업 이름 입력" />
              </div>
              <div className="flex flex-col w-full overflow-y-auto h-72">
                {lessons &&
                  lessons.map((lesson, idx) => (
                    <CheckListItem key={idx} text={lesson} />
                  ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Background onClick={handleCloseLessonModal} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default MemoLessonSelect;
