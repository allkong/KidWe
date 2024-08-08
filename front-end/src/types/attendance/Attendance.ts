/**
 * date : YYYY-MM-DD
 */
export interface Attendance {
  attendanceId: number;
  banId: number;
  banName: string;
  kidId: number;
  kidName: string;
  reason: string;
  attendedToday: string;
  date: string;
}
