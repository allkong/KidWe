import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import dayjs from 'dayjs';

import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (date: string, time: string) => void;
}

const ScheduleModal = ({isOpen, onClose, onSubmit}: ScheduleModalProps) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [minDate, setMinDate] = useState('');
  const [minTime, setMinTime] = useState('');

  useEffect(() => {
    const now = dayjs();
    const minDate = now.format('YYYY-MM-DD');
    const minTime = now.add(5, 'minute').format('HH:mm');

    setMinDate(minDate);
    setMinTime(minTime);
  }, []);

  const handleSubmit = () => {
    if (!selectedDate) {
      toast.error('날짜를 선택해 주세요');
    } else if (!selectedTime) {
      toast.error('시간을 선택해 주세요');
    } else {
      onSubmit(selectedDate, selectedTime);
    }
  };

  return (
    <ModalPortal>
      <Modal isOpen={isOpen}>
        <Modal.Header title="예약 전송" />
        <Modal.Body>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium" htmlFor="date">
              날짜 선택
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 border border-gray-200 rounded-md"
              value={selectedDate}
              min={minDate}
              onChange={e => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium" htmlFor="time">
              시간 선택
            </label>
            <input
              type="time"
              id="time"
              className="w-full p-2 border border-gray-200 rounded-md"
              value={selectedTime}
              min={selectedDate === minDate ? minTime : undefined} // 현재 날짜의 경우에만 minTime 적용
              onChange={e => setSelectedTime(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.BottomButton
          label="취소"
          onClick={onClose}
          size="large"
          round="full"
          variant="negative"
        />
        <Modal.BottomButton
          label="저장"
          onClick={handleSubmit}
          size="large"
          round="full"
          variant="positive"
        />
      </Modal>
    </ModalPortal>
  );
};

export default ScheduleModal;
