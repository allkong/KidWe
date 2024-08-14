import type {UserData} from '@/types/user/UserData';
import {RoleItem} from '@/enum/roleItem';

export interface UserDataInterface {
  setUserData: (data: UserData) => void;
  deleteUserData: () => void;
  getUserData: () => UserData | null;
  getMemberId: () => number | null;
  getMemberEmail: () => string | null;
  getMemberRole: () => RoleItem | null;
  getMemberStatus: () => 'NOTHING' | 'DECLINE' | 'PENDING' | 'ACCEPT' | null;
  getKindergartenId: () => number | null;
  getBanId: () => number | null;
  getKidId: () => number | null;
}
