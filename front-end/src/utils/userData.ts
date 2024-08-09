import type {UserData} from '@/types/user/UserData';

// export const {
//   setUserData,
//   getUserData,
//   getMemberId,
//   getMemberEmail,
//   getMemberRole,
//   getMemberStatus,
//   getKindergartenId,
//   getBanId,
//   getKidIds,
// } = (() => {
//   let data: UserData | null = null;
//   const getProperty = <K extends keyof UserData>(
//     property: K
//   ): UserData[K] | null => {
//     return data !== null ? data[property] : null;
//   };

//   const setUserData = (value: UserData) => (data = value);
//   const getUserData = () => data;
//   const getMemberId = () => getProperty('memberId');
//   const getMemberEmail = () => getProperty('memberEmail');
//   const getMemberRole = () => getProperty('memberRole');
//   const getMemberStatus = () => getProperty('memberStatus');
//   const getKindergartenId = () => getProperty('kindergartenId');
//   const getBanId = () => getProperty('banId');
//   const getKidIds = () => getProperty('kidIds');

//   return {
//     setUserData,
//     getUserData,
//     getMemberId,
//     getMemberEmail,
//     getMemberRole,
//     getMemberStatus,
//     getKindergartenId,
//     getBanId,
//     getKidIds,
//   };
// })();

const DATA_KEY = 'user-data';

const getSessionData = <T>(): T | null => {
  const item = sessionStorage.getItem(DATA_KEY);
  return item ? (JSON.parse(item) as T) : null;
};

const getUserProperty = <K extends keyof UserData>(
  property: K
): UserData[K] | null => {
  const data = getSessionData<UserData>();
  return data ? data[property] : null;
};

export const setUserData = (data: UserData) => {
  sessionStorage.setItem(DATA_KEY, JSON.stringify(data));
};

export const getUserData = (): UserData | null => {
  return getSessionData<UserData>();
};

export const getMemberId = (): number | null => {
  return getUserProperty('memberId');
};

export const getMemberEmail = (): string | null => {
  return getUserProperty('memberEmail');
};

export const getMemberRole = (): string | null => {
  return getUserProperty('memberRole');
};

export const getMemberStatus = (): string | null => {
  return getUserProperty('memberStatus');
};

export const getKindergartenId = (): number | null => {
  return getUserProperty('kindergartenId');
};

export const getBanId = (): number | null => {
  return getUserProperty('banId');
};

export const getKidIds = (): number[] | null => {
  return getUserProperty('kidIds');
};
