import Button from '@/components/atoms/Button/Button';
import Select from '@/components/molecules/DropdownButton/Select';
import {PostSchedule} from '@/types/schedule/PostSchedule';
import {useMutation} from '@tanstack/react-query';
import {useState} from 'react';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import Modal from '@/components/organisms/Modal/Modal';
import dayjs from 'dayjs';
import {postSchedule} from '@/apis/schedule/postSchedule';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import TextArea from '@/components/atoms/Input/TextArea';
import Divider from '@/components/atoms/Divider/Divider';

const categories = ['행사', '수업', '유치원'];

const ScheduleController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const [textValue, setTextValue] = useState('');
  const [date, onChangeDate] = useState(dayjs());

  const postMutate = useMutation({
    mutationFn: () => {
      const body: PostSchedule = {
        content: textValue,
        keyword: selected,
        localDate: dayjs().format('YYYY-MM-DD'),
      };
      console.log(body);
      return postSchedule(1, body);
    },
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    postMutate.mutate();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        label="일정 등록"
        round="full"
        size="small"
        onClick={handleOpen}
      />
      <ModalPortal>
        <Modal isOpen={isOpen}>
          <Modal.Header title="일정 등록" />
          <Modal.Body>
            <div className="flex flex-col mt-10 mb-10 gap-7 h-fit">
              <div>
                <CalendarButton
                  position="right"
                  defaultDate={date}
                  onClick={onChangeDate}
                  render={() => (
                    <p className="text-lg font-bold">
                      🗓️ {date.format('YY년 M월 D일 (ddd)')}
                    </p>
                  )}
                />
                <Divider />
              </div>
              <Select label="카테고리" size="medium" onChange={setSelected}>
                {categories &&
                  categories.map((category, idx) => (
                    <Select.Option key={idx} text={category} />
                  ))}
              </Select>
              <div className="w-full h-20">
                <TextArea
                  placeholder="일정 내용"
                  value={textValue}
                  onChange={setTextValue}
                />
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

export default ScheduleController;
