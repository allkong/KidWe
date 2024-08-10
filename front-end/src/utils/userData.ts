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

import {userDataSessionImplements} from '@/utils/user-data-implements/userDataSessionImplements';

const userData: UserDataInterface = userDataSessionImplements;

export const setUserData = userData.setUserData.bind(userData);
export const getUserData = userData.getUserData.bind(userData);
export const getMemberId = userData.getMemberId.bind(userData);
export const getMemberEmail = userData.getMemberEmail.bind(userData);
export const getMemberRole = userData.getMemberRole.bind(userData);
export const getMemberStatus = userData.getMemberStatus.bind(userData);
export const getKindergartenId = userData.getKindergartenId.bind(userData);
export const getBanId = userData.getBanId.bind(userData);
export const getKidIds = userData.getKidIds.bind(userData);
