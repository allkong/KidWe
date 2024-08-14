export interface GetUserInfo {
  id: number;
  name: string;
  email: string;
  tel: string;
  role: 'ROLE_DIRECTOR' | 'ROLE_TEACHER' | 'ROLE_GUARDIAN';
  kindergartenName: string;
  picture: string;
}
