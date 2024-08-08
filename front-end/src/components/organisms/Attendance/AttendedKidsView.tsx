import {Dayjs} from 'dayjs';

interface NotAttendedKidsViewProps {
  date?: Dayjs;
}

const NotAttendedKidsView = ({date}: NotAttendedKidsViewProps) => {
  date;
  return <div>결석 학생들</div>;
};

export default NotAttendedKidsView;
