import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';
import {selector} from 'recoil';

export const patchUserPasswordSelector = selector({
  key: 'patchUserPasswordSelector',
  get: ({get}) => {
    const userInfo = get(patchUserInfoState);
    return userInfo.password;
  },
  set: ({get, set}, newValue) => {
    const userInfo = get(patchUserInfoState);
    set(patchUserInfoState, {...userInfo, password: newValue as string});
  },
});
