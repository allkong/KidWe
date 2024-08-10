import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';
import {selector} from 'recoil';

export const patchUserEmailSelector = selector({
  key: 'patchUserEmailSelector',
  get: ({get}) => {
    const userInfo = get(patchUserInfoState);
    return userInfo.email;
  },
  set: ({get, set}, newValue) => {
    const userInfo = get(patchUserInfoState);
    set(patchUserInfoState, {...userInfo, email: newValue as string});
  },
});
