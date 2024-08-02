import dayjs, {Dayjs} from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Value} from 'react-calendar/dist/cjs/shared/types';

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

  return (
    <Calendar
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
