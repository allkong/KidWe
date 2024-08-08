/**
 * date : YYYY-MM-DD
 */
export interface GetAttendance {
  attendanceId: number;
  banId: number;
  banName: string;
  kidId: number;
  kidName: string;
  reason: string;
  attendedToday: string;
  date: string;
}
