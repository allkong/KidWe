import {UserDataInterface} from '@/utils/user-data-implements/UserDataInterface';

// import * as userDataClosure from '@/utils/user-data-implements/userDataClosureImplements';

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
// }: UserDataInterface = userDataClosure;

import * as userDataSessionImplements from '@/utils/user-data-implements/userDataSessionImplements';

export const {
  setUserData,
  deleteUserData,
  getUserData,
  getMemberId,
  getMemberEmail,
  getMemberRole,
  getMemberStatus,
  getKindergartenId,
  getBanId,
  getKidIds,
}: UserDataInterface = userDataSessionImplements;
