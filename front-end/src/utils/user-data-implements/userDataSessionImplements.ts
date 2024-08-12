import {UserData} from '@/types/user/UserData';
import {UserDataInterface} from '@/utils/user-data-implements/UserDataInterface';

class UserDataSessionImplements implements UserDataInterface {
  private readonly DATA_KEY = 'user-data';

  private getSessionData = <T>(): T | null => {
    const item = sessionStorage.getItem(this.DATA_KEY);
    return item ? (JSON.parse(item) as T) : null;
  };

  private getUserProperty = <K extends keyof UserData>(
    property: K
  ): UserData[K] | null => {
    const data = this.getSessionData<UserData>();
    return data ? data[property] : null;
  };

  private constructor() {}

  private static instance: UserDataInterface | null = null;

  static getInstance = () => {
    if (this.instance === null) {
      this.instance = new UserDataSessionImplements();
    }
    return this.instance;
  };

  setUserData = (data: UserData) => {
    sessionStorage.setItem(this.DATA_KEY, JSON.stringify(data));
  };

  deleteUserData = () => {
    sessionStorage.removeItem(this.DATA_KEY);
  };

  getUserData = (): UserData | null => {
    return this.getSessionData<UserData>();
  };

  getMemberId = (): number | null => {
    return this.getUserProperty('memberId');
  };

  getMemberEmail = (): string | null => {
    return this.getUserProperty('memberEmail');
  };

  getMemberRole = (): string | null => {
    return this.getUserProperty('memberRole');
  };

  getMemberStatus = (): string | null => {
    return this.getUserProperty('memberStatus');
  };

  getKindergartenId = (): number | null => {
    return this.getUserProperty('kindergartenId');
  };

  getBanId = (): number | null => {
    return this.getUserProperty('banId');
  };

  getKidIds = (): number[] | null => {
    return this.getUserProperty('kidIds');
  };
}

const userDataSessionImplements = UserDataSessionImplements.getInstance();

export const setUserData = userDataSessionImplements.setUserData.bind(
  userDataSessionImplements
);
export const deleteUserData = userDataSessionImplements.deleteUserData.bind(
  userDataSessionImplements
);
export const getUserData = userDataSessionImplements.getUserData.bind(
  userDataSessionImplements
);
export const getMemberId = userDataSessionImplements.getMemberId.bind(
  userDataSessionImplements
);
export const getMemberEmail = userDataSessionImplements.getMemberEmail.bind(
  userDataSessionImplements
);
export const getMemberRole = userDataSessionImplements.getMemberRole.bind(
  userDataSessionImplements
);
export const getMemberStatus = userDataSessionImplements.getMemberStatus.bind(
  userDataSessionImplements
);
export const getKindergartenId =
  userDataSessionImplements.getKindergartenId.bind(userDataSessionImplements);
export const getBanId = userDataSessionImplements.getBanId.bind(
  userDataSessionImplements
);
export const getKidIds = userDataSessionImplements.getKidIds.bind(
  userDataSessionImplements
);
