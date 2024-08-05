import DateNavigator from '@/components/organisms/Navigation/DateNavigator';
import ScheduleInfo from '@/components/organisms/Schedule/ScheduleInfo';
import Select from '@/components/molecules/Select/Select';
import Button from '@/components/atoms/Button/Button';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import TextArea from '@/components/atoms/Input/TextArea';
import Divider from '@/components/atoms/Divider/Divider';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import {containerNavigatorClass} from '@/styles/styles';
import {useState} from 'react';

const kindergartens = ['전체', '햇살반', '꽃잎반'];
const categories = ['행사', '수업', '유치원'];

const KindergartenSchedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header title="유치원 일정" buttonType="back" />
      <DateNavigator title="7월" />
      <div
        className={`${containerNavigatorClass} items-center justify-center w-full px-10 space-y-4 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full h-16">
          <div>
            <Select label="반" size="small">
              {kindergartens &&
                kindergartens.map((data, idx) => (
                  <Select.Option key={idx} text={data} />
                ))}
            </Select>
          </div>
          <div>
            <Button
              label="일정 등록"
              round="full"
              size="small"
              onClick={handleOpen}
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow w-full">
          <div className="flex items-center justify-center max-w-full px-1 pt-10 pb-3 border border-gray-200 rounded-lg aspect-square">
            <CustomCalendar showNavigation={false} />
          </div>
        </div>
        <ScheduleInfo />
      </div>
      <NavigationBar />
      <ModalPortal>
        <Modal isOpen={isOpen}>
          <Modal.Header title="일정 등록" />
          <Modal.Body>
            <div className="flex flex-col mt-10 mb-10 gap-7 h-fit">
              <div>
                <CalendarButton
                  position="right"
                  render={() => (
                    <p className="text-lg font-bold">🗓️ 24년 8월 1일 (목)</p>
                  )}
                />
                <Divider />
              </div>
              <Select label="카테고리" size="medium">
                {categories &&
                  categories.map((category, idx) => (
                    <Select.Option key={idx} text={category} />
                  ))}
              </Select>
              <div className="w-full h-20">
                <TextArea placeholder="일정 내용" />
              </div>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="일정 등록"
            size="large"
            onClick={handleSubmit}
          />
          <Modal.Background onClick={handleClose} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default KindergartenSchedule;
