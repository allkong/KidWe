import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {memo, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import {useHeader} from '@/contexts/header/HeaderContext';
import Modal from '@/components/organisms/Modal/Modal';
import MemoView from '@/components/organisms/Memo/MemoView';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';

const MemoList = memo(() => {
  // const {handleHeaderTitle} = useHeader();

  // useEffect(() => {
  //   handleHeaderTitle('관찰 메모');
  // }, [handleHeaderTitle]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const dataRef = useRef<{
    children?: string[];
    tags?: string[];
    time?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }>();

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-full items-center bg-[#F8F8F8]">
        <div className="min-w-full mb-10">
          <DateNavigator title="7.16 (화)" />
        </div>
        {/* {mockUpDatas.map(data => (
          <MemoListItem
            {...data}
            onClick={() => {
              // id를 받아서 memoview에 넘김
              // idRef.current = data.id;
              dataRef.current = data;
              handleModalOpen();
            }}
          />
        ))} */}
        <MemoListItem onClick={handleModalOpen} />
        <WriteButton onClick={() => navigate('/kindergarten/write')} />
      </div>
      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="관찰 메모" />
          <Modal.Body>
            <MemoView {...dataRef.current} />
          </Modal.Body>
          <Modal.BottomButton
            onClick={handleModalClose}
            label="수정"
            variant="negative"
            size="large"
            round="full"
          ></Modal.BottomButton>
          <Modal.BottomButton
            onClick={handleModalClose}
            label="확인"
            variant="positive"
            size="large"
            round="full"
          ></Modal.BottomButton>
          <Modal.Background onClick={handleModalClose}></Modal.Background>
        </Modal>
      </ModalPortal>
    </>
  );
});

export default MemoList;
