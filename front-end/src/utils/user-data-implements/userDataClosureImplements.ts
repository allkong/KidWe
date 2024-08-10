import {UserData} from '@/types/user/UserData';
import {UserDataInterface} from '@/utils/user-data-implements/UserDataInterface';

export const {
  setUserData,
  getUserData,
  getMemberId,
  getMemberEmail,
  getMemberRole,
  getMemberStatus,
  getKindergartenId,
  getBanId,
  getKidIds,
}: UserDataInterface = (() => {
  let data: UserData | null = null;
  const getProperty = <K extends keyof UserData>(
    property: K
  ): UserData[K] | null => {
    return data !== null ? data[property] : null;
  };

  const setUserData = (value: UserData) => (data = value);
  const getUserData = () => data;
  const getMemberId = () => getProperty('memberId');
  const getMemberEmail = () => getProperty('memberEmail');
  const getMemberRole = () => getProperty('memberRole');
  const getMemberStatus = () => getProperty('memberStatus');
  const getKindergartenId = () => getProperty('kindergartenId');
  const getBanId = () => getProperty('banId');
  const getKidIds = () => getProperty('kidIds');

  return {
    setUserData,
    getUserData,
    getMemberId,
    getMemberEmail,
    getMemberRole,
    getMemberStatus,
    getKindergartenId,
    getBanId,
    getKidIds,
  };
})();
