import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {memo, useEffect, useState} from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import Modal from '@/components/organisms/Modal/Modal';
import MemoView from '@/components/organisms/Memo/MemoView';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {containerNavigatorClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import dayjs from 'dayjs';
import type {GetMemo} from '@/types/memo/GetMemo';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useRecoilState} from 'recoil';
import {useGetDailyMemo} from '@/hooks/memo/useGetDailyMemo';

const teacherId = 1;

const MemoList = memo(() => {
  const [date, setDate] = useState(dayjs());

  const [memo, setMemo] = useRecoilState(memoState); // 메모가 작성될 atom
  const [modalMemo, setModalMemo] = useState<GetMemo>(); // 모달에 띄울 메모

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const {data, refetch} = useGetDailyMemo(
    teacherId,
    date.format('YYYY'),
    date.format('MM'),
    date.format('DD')
  );

  useEffect(() => {
    setMemo({...memo, updatedTime: date});
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

  const handleModalOpen = (memo: GetMemo) => {
    setModalMemo(memo);
    setIsModalOpen(true);
  };

  const moveToUpdate = (id: string) => {
    navigate({
      pathname: `/kindergarten/memo/write`,
      search: createSearchParams({id}).toString(),
    });
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
          {data &&
            data
              .sort((e1, e2) => {
                return dayjs(e1.updatedTime)
                  .format('HH:MM')
                  .localeCompare(dayjs(e2.updatedTime).format('HH:MM'));
              })
              .map(memo => (
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
            onClick={() => moveToUpdate(modalMemo?.id as string)}
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
