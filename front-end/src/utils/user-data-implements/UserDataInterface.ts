import type {UserData} from '@/types/user/UserData';

export interface UserDataInterface {
  setUserData: (data: UserData) => void;
  getUserData: () => UserData | null;
  getMemberId: () => number | null;
  getMemberEmail: () => string | null;
  getMemberRole: () => string | null;
  getMemberStatus: () => string | null;
  getKindergartenId: () => number | null;
  getBanId: () => number | null;
  getKidIds: () => number[] | null;
}
