import type {UserData} from '@/types/user/UserData';

export interface UserDataInterface {
  setUserData: (data: UserData) => void;
  deleteUserData: () => void;
  getUserData: () => UserData | null;
  getMemberId: () => number | null;
  getMemberEmail: () => string | null;
  getMemberRole: () =>
    | 'ROLE_DIRECTOR'
    | 'ROLE_GUARDIAN'
    | 'ROLE_TEACHER'
    | null;
  getMemberStatus: () => 'NOTHING' | 'DECLINE' | 'PENDING' | 'ACCEPT' | null;
  getKindergartenId: () => number | null;
  getBanId: () => number | null;
  getKidIds: () => number[] | null;
}
