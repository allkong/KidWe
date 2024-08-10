export interface GetKidInfo {
  id: number;
  name: string;
  birthday: string; // YYYY-MM-DD
  startAttendanceDate: string; // YYYY-MM-DD
  gender: 'MALE' | 'FEMALE';
  allergies: [string];
  picture: string;
  banId: number;
  banName: string;
  stopId: number;
  busId: number;
  deleted: boolean;
  take: boolean;
}
