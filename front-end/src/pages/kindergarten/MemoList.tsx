import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {memo, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from '@/components/organisms/Modal/Modal';
import MemoView from '@/components/organisms/Memo/MemoView';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {containerNavigatorClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {useQuery} from '@tanstack/react-query';
import {getTeacherDailyMemos} from '@/apis/memo/getTeacherDailyMemos';
import dayjs from 'dayjs';
import {TeacherDailyMemo} from '@/apis/memo/getTeacherDailyMemos';

const MemoList = memo(() => {
  const [date, setDate] = useState(dayjs());

  const [memos, setMemos] = useState<TeacherDailyMemo[]>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMemo, setModalMemo] = useState<TeacherDailyMemo>();

  const navigate = useNavigate();

  const {data, refetch} = useQuery({
    queryKey: ['memos', 1],
    queryFn: () =>
      getTeacherDailyMemos(
        0,
        date.format('YYYY'),
        date.format('MM'),
        date.format('DD')
      ),
  });

  useEffect(() => {
    setMemos(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [date]);

  const handleLeftClick = () => {
    setDate(date.subtract(1, 'day'));
  };

  const handleRightClick = () => {
    setDate(date.add(1, 'day'));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = (memo: TeacherDailyMemo) => {
    setModalMemo(memo);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={`${containerNavigatorClass} flex flex-col h-screen items-center bg-[#F8F8F8]`}
      >
        <Header title="관찰 메모" buttonType="close" />
        <DateNavigator
          title={date.format('M.D (ddd)')}
          onClickLeft={handleLeftClick}
          onClickRight={handleRightClick}
        />
        <div className="mt-10">
          {memos &&
            memos.map(memo => (
              <MemoListItem
                key={memo.id}
                memo={memo}
                onClick={() => handleModalOpen(memo)}
              />
            ))}
        </div>
        <WriteButton onClick={() => navigate('/kindergarten/memo/write')} />
        <NavigationBar />
      </div>
      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="관찰 메모" />
          <Modal.Body>
            <MemoView memo={modalMemo} />
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
