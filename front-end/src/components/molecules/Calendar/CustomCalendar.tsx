import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import {Value} from 'react-calendar/dist/cjs/shared/types';

interface CustomCalendarProps {
  defaultDate?: Date;
  onChange?: (date: Date) => void;
  showNavigation?: boolean;
  showNeighboringMonth?: boolean;
}

const CustomCalendar = ({
  defaultDate = dayjs().toDate(),
  onChange,
  showNavigation = true,
  showNeighboringMonth = false,
}: CustomCalendarProps) => {
  return (
    <Calendar
      value={defaultDate}
      calendarType="gregory"
      onChange={value => onChange?.(new Date(value!.toString()))}
      showNavigation={showNavigation}
      showNeighboringMonth={showNeighboringMonth}
      view="month"
      formatDay={(_, date) => dayjs(date).format('DD')}
    ></Calendar>
  );
};

export default CustomCalendar;
