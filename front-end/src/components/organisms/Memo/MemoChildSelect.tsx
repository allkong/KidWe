import DashedRoundedButton from '@/components/atoms/Button/DashedRoundedButton';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import sunflower from '@/assets/sunflower.png';
import {useState} from 'react';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal/Modal';
import CheckListItem from '@/components/organisms/Check/CheckListItem';
import Input from '@/components/atoms/Input/Input';
// import {memoState} from '@/recoil/atoms/memo/memo';
// import {useRecoilState} from 'recoil';

const children = ['1', '2', '3', '4'];

const MemoChildSelect = () => {
  // const [_, setMemo] = useRecoilState(memoState);

  const [isChildrenModalOpen, setIsChildrenModalOpen] = useState(false);

  const handleCloseChildrenModal = () => {
    setIsChildrenModalOpen(false);
  };

  const handleOpenChildrenModal = () => {
    setIsChildrenModalOpen(true);
  };

  const handleSubmitChildrenModal = () => {
    setIsChildrenModalOpen(false);
  };

  return (
    <>
      <p className="text-sm">원생 선택</p>
      <div className="flex flex-wrap gap-2 overflow-y-auto max-h-10">
        <ProfileImage src={sunflower}></ProfileImage>
        <DashedRoundedButton
          onClick={handleOpenChildrenModal}
        ></DashedRoundedButton>
      </div>
      <ModalPortal>
        <Modal isOpen={isChildrenModalOpen}>
          <Modal.Header title="원생 선택" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 py-6">
              <div className="box-border w-full px-6 h-fit">
                <Input placeholder="원생 이름 입력" />
              </div>
              <div className="flex flex-col w-full overflow-y-auto h-72">
                {children &&
                  children.map((child, idx) => (
                    <CheckListItem key={idx} text={child} />
                  ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleCloseChildrenModal}
            variant="negative"
            round="full"
            size="large"
          ></Modal.BottomButton>
          <Modal.BottomButton
            label="선택"
            onClick={handleSubmitChildrenModal}
            variant="positive"
            round="full"
            size="large"
          ></Modal.BottomButton>
          <Modal.Background onClick={handleCloseChildrenModal} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default MemoChildSelect;
