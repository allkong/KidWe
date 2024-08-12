import MemoListItem from '@/components/organisms/Memo/MemoListItem';
import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import {memo, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import Modal from '@/components/organisms/Modal/Modal';
import MemoView from '@/components/organisms/Memo/MemoView';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import {containerNavigatorClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import dayjs from 'dayjs';
import type {GetMemo} from '@/types/memo/GetMemo';
import {useGetDailyMemo} from '@/hooks/memo/useGetDailyMemo';
import {useDeleteMemo} from '@/hooks/memo/useDeleteMemo';
import {toast} from 'react-toastify';
import {getMemberId} from '@/utils/userData';

const MemoList = memo(() => {
  const [serachParams] = useSearchParams();
  const paramDate = serachParams.get('date');
  let date = dayjs(paramDate);
  if (!date.isValid()) {
    date = dayjs();
  }

  // 현재 시간
  const handleLeftClick = () => {
    navigate({
      pathname: '/memo',
      search: `?date=${date.subtract(1, 'day').format('YYYY-MM-DD')}`,
    });
  };

  const handleRightClick = () => {
    navigate({
      pathname: '/memo',
      search: `?date=${date.add(1, 'day').format('YYYY-MM-DD')}`,
    });
  };

  // data fetch
  const {data, refetch} = useGetDailyMemo(
    getMemberId()!,
    date.format('YYYY'),
    date.format('MM'),
    date.format('DD')
  );

  // modal
  const [modalMemo, setModalMemo] = useState<GetMemo>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = (memo: GetMemo) => {
    setModalMemo(memo);
    setIsModalOpen(true);
  };

  // Button
  const navigate = useNavigate();
  const deleteMutate = useDeleteMemo();

  const moveToUpdate = (id: string | undefined) => {
    if (id !== undefined) {
      navigate({
        pathname: `update/${id}`,
      });
    }
  };

  const moveToWrite = () => {
    navigate({
      pathname: `write`,
      search: `date=${date.format('YYYY-MM-DD')}`,
    });
  };

  const handleDeleteClick = (memoId: string | undefined) => {
    if (memoId !== undefined) {
      deleteMutate.mutate(
        {teacherId: getMemberId()!, memoId},
        {
          onSuccess: () => {
            refetch();
            toast.info('삭제 완료');
          },
        }
      );
    }
    setIsModalOpen(false);
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
          {/* 메모 리스트를 보여주는 화면 */}
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
        <WriteButton onClick={moveToWrite} />
        <NavigationBar />
      </div>
      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="관찰 메모" />
          <Modal.Body>
            <MemoView memo={modalMemo} />
          </Modal.Body>
          <Modal.BottomButton
            onClick={() => moveToUpdate(modalMemo?.id)}
            label="수정"
            variant="positive"
            size="large"
            round="full"
          ></Modal.BottomButton>
          <Modal.BottomButton
            onClick={() => handleDeleteClick(modalMemo?.id)}
            label="삭제"
            variant="negative"
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
