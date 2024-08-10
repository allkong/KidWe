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
import dayjs, {Dayjs} from 'dayjs';
import type {GetMemo} from '@/types/memo/GetMemo';
import {memoTimeSelector} from '@/recoil/selectors/memo/memoTime';
import {useSetRecoilState} from 'recoil';
import {useGetDailyMemo} from '@/hooks/memo/useGetDailyMemo';
import {useLoading} from '@/hooks/loading/useLoading';

const teacherId = 1;

const MemoList = memo(() => {
  const [date, setDate] = useState(dayjs());
  const setMemoTime = useSetRecoilState<Dayjs>(memoTimeSelector);
  const [modalMemo, setModalMemo] = useState<GetMemo>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const {data, refetch, isLoading} = useGetDailyMemo(
    teacherId,
    date.format('YYYY'),
    date.format('MM'),
    date.format('DD')
  );
  useLoading(isLoading);

  useEffect(() => {
    setMemoTime(date);
    refetch();
  }, [date, setMemoTime, refetch]);

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
      pathname: `write`,
      search: createSearchParams({id}).toString(),
    });
  };

  const moveToWrite = () => {
    navigate({
      pathname: `write`,
      // search: createSearchParams({date: date.format('YYYY-MM-DD')}).toString(),
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
