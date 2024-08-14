import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import WriteButton from '@/components/atoms/Button/WriteButton';
import FoodInfomationItem from '@/components/organisms/Food/FoodInfomationItem';
import FoodDateNavigator from '@/components/organisms/Food/FoodDateNavigator';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {useNavigate} from 'react-router-dom';
import {containerNavigatorClass} from '@/styles/styles';
import NoResult from '@/components/atoms/NoResult';
import dayjs, {Dayjs} from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import {useGetDailyFood} from '@/hooks/food/useGetDailyFood';
import {useLoading} from '@/hooks/loading/useLoading';
import {getKindergartenId, getMemberRole} from '@/utils/userData';
import {useGetDateBySearchParam} from '@/hooks/useGetDateBySearchParam';
import XSmallButton from '@/components/atoms/Button/XSmallButton';
import {useDeleteDailyFood} from '@/hooks/food/useDeleteDailyFood';
import {toast} from 'react-toastify';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import Modal from '@/components/organisms/Modal/Modal';
import {useState} from 'react';

dayjs.extend(weekOfYear);

function getWeekOfMonth(date: Dayjs) {
  const startOfMonth = date.startOf('month');
  const startWeekCount = startOfMonth.week();
  const currentWeekCount = date.week();
  return currentWeekCount - startWeekCount + 1;
}

const FoodInfo = () => {
  const navigate = useNavigate();
  const date = useGetDateBySearchParam();

  const {data: food, isLoading} = useGetDailyFood(getKindergartenId()!, date);
  useLoading(isLoading);

  // 삭제 기능 및 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const deleteMutate = useDeleteDailyFood();
  const handleDeleteClick = () => {
    if (food) {
      deleteMutate.mutate(
        {menuId: food.menuId},
        {
          onSuccess: () => {
            toast.info('삭제 완료되었습니다.');
          },
        }
      );
    }
    handleCloseModal();
  };

  const handleUpdateClick = () => {
    navigate({
      pathname: 'write',
      search: `date=${date.format('YYYY-MM-DD')}&update=true`,
    });
  };

  // navigate
  const handleLeftClick = () => {
    navigate({
      pathname: '/foods',
      search: `?date=${date.subtract(1, 'week').format('YYYY-MM-DD')}`,
    });
  };

  const handleRightClick = () => {
    navigate({
      pathname: '/foods',
      search: `?date=${date.add(1, 'week').format('YYYY-MM-DD')}`,
    });
  };

  const handleDateChange = (value: Dayjs) => {
    navigate({
      pathname: '/foods',
      search: `?date=${value.format('YYYY-MM-DD')}`,
    });
  };

  const moveToWrite = () => {
    navigate({
      pathname: 'write',
      search: `date=${date.format('YYYY-MM-DD')}`,
    });
  };

  return (
    <>
      <div
        className={`${containerNavigatorClass} flex flex-col items-center justify-center box-border h-screen px-5 overflow-y-auto`}
      >
        <Header title="급식 정보" buttonType="close" />
        <DateNavigator
          title={`${date.format('M월')} ${getWeekOfMonth(date)}주차`}
          onClickLeft={handleLeftClick}
          onClickRight={handleRightClick}
        />

        <div className="flex justify-center gap-2 mb-4 w-fit h-fit">
          <FoodDateNavigator date={date} onClick={handleDateChange} />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow mb-20 space-y-3">
          {food ? (
            <>
              <div className="flex justify-end w-full gap-1">
                <XSmallButton label="삭제" onClick={handleOpenModal} />
                <XSmallButton
                  label="수정"
                  variant="positive"
                  onClick={handleUpdateClick}
                />
              </div>
              <FoodInfomationItem
                variant="lunch"
                menu={food.lunch}
                allergies={food.lunchAllergies}
                kidAllergies={food.kidAllergyListOfLunch}
                onClick={moveToWrite}
              />
              <FoodInfomationItem
                variant="snack"
                menu={food.snack}
                allergies={food.snackAllergies}
                kidAllergies={food.kidAllergyListOfSnack}
                onClick={moveToWrite}
              />
              <FoodInfomationItem
                variant="dinner"
                menu={food.dinner}
                allergies={food.dinnerAllergies}
                kidAllergies={food.kidAllergyListOfDinner}
                onClick={moveToWrite}
              />
            </>
          ) : (
            <NoResult text="등록된 식단이 없습니다" />
          )}
        </div>
        <NavigationBar />
      </div>
      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="알림" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center w-full h-full py-10">
              <p>식단을 삭제하시겠습니까?</p>
              <p>삭제한 식단은 되돌릴 수 없습니다.</p>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            size="large"
            label="취소"
            round="full"
            variant="negative"
            onClick={handleCloseModal}
          />
          <Modal.BottomButton
            size="large"
            label="삭제"
            round="full"
            onClick={handleDeleteClick}
          />
          <Modal.Background onClick={handleCloseModal} />
        </Modal>
      </ModalPortal>
      {getMemberRole() !== 'ROLE_GUARDIAN' && (
        <WriteButton onClick={() => moveToWrite()} />
      )}
    </>
  );
};

export default FoodInfo;
