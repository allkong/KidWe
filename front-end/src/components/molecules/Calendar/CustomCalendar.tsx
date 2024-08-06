import dayjs, {Dayjs} from 'dayjs';
import Calendar from 'react-calendar';
import '@/components/molecules/Calendar/calendar.css';
import {Value} from 'react-calendar/dist/cjs/shared/types';
import {useEffect} from 'react';

interface CustomCalendarProps {
  onChange?: (date: Dayjs) => void;
  defaultDate?: Dayjs;
  showNavigation?: boolean;
  showNeighboringMonth?: boolean;
}

const CustomCalendar = ({
  defaultDate = dayjs(),
  onChange,
  showNavigation = true,
  showNeighboringMonth = false,
}: CustomCalendarProps) => {
  const handleChange = (value: Value) => {
    const date = new Date(value!.toString());
    onChange?.(dayjs(date));
  };

  useEffect(() => {
    console.log(defaultDate.toDate());
  }, [defaultDate]);

  return (
    <Calendar
      activeStartDate={defaultDate.toDate()}
      value={defaultDate.toDate()}
      calendarType="gregory"
      onChange={handleChange}
      showNavigation={showNavigation}
      showNeighboringMonth={showNeighboringMonth}
      view="month"
      formatDay={(_, date) => dayjs(date).format('DD')}
    ></Calendar>
  );
};

export default CustomCalendar;
