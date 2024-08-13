import {RoleItem} from '@/enum/roleItem';

export interface GetUserInfo {
  id: number;
  name: string;
  email: string;
  tel: string;
  picture: string;
  role: RoleItem;
}
