export interface PutAttendance {
  year: number;
  month: number;
  day: number;
  kidIds: number[];
  attendedToday: 'NOTHING' | 'ATTENDANCE' | 'ABSENCE';
}
