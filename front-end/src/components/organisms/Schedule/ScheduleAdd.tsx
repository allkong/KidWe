import Button from '@/components/atoms/Button/Button';
import Select from '@/components/molecules/DropdownButton/Select';
import {useEffect, useState} from 'react';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import Modal from '@/components/organisms/Modal/Modal';
import type {Dayjs} from 'dayjs';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import TextArea from '@/components/atoms/Input/TextArea';
import Divider from '@/components/atoms/Divider/Divider';
import {ScheduleOption} from '@/enum/kindergarten/schedule';
import {scheduleOptionKeys} from '@/enum/kindergarten/schedule';
import {useWriteKindergartenSchedule} from '@/hooks/schedule/useWriteKindergartenSchedule';

interface ScheduleAddProps {
  defaultDate: Dayjs;
}

function getScheduleOptionValue(category: keyof typeof ScheduleOption) {
  return ScheduleOption[category];
}

const memberId = 2;
const kindergartenId = 1;

// 스케줄 작성 시 권한 확인
// 1 : 원장, 2 : 선생님으로 되어있음
const ScheduleAdd = ({defaultDate}: ScheduleAddProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>();
  const [keyword, setKeyword] = useState('');
  const [content, setContent] = useState('');
  const [date, onChangeDate] = useState(defaultDate);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    onChangeDate(defaultDate);
  }, [defaultDate]);

  useEffect(() => {
    setIsValid(
      selected !== undefined && keyword.length !== 0 && content.length !== 0
    );
  }, [selected, keyword, content]);

  const postMutate = useWriteKindergartenSchedule(kindergartenId);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    postMutate.mutate(
      {
        memberId,
        keyword,
        content,
        localDate: date.format('YYYY-MM-DD'),
        type: selected as 'EVENT' | 'CLASS' | 'ALLNOTICE',
      },
      {
        onSuccess: () => {
          setSelected(undefined);
          setKeyword('');
          setContent('');
        },
      }
    );
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
                {scheduleOptionKeys &&
                  scheduleOptionKeys.map((category, idx) => (
                    <Select.Option
                      key={idx}
                      id={getScheduleOptionValue(
                        category as keyof typeof ScheduleOption
                      )}
                      text={category}
                    />
                  ))}
              </Select>
              <div className="space-y-2">
                <div className="w-full h-11">
                  <TextArea
                    placeholder="키워드"
                    value={keyword}
                    onChange={setKeyword}
                  />
                </div>
                <div className="w-full h-20">
                  <TextArea
                    placeholder="일정 내용"
                    value={content}
                    onChange={setContent}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            variant={isValid ? 'positive' : 'negative'}
            disabled={!isValid}
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

export default ScheduleAdd;
