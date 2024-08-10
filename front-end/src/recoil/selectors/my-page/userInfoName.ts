import {selector} from 'recoil';
import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';

export const patchUserNameSelector = selector<string>({
  key: 'patchUserNameSelector',
  get: ({get}) => {
    const patchUserInfo = get(patchUserInfoState);
    return patchUserInfo.name;
  },
  set: ({get, set}, newValue) => {
    const patchUserInfo = get(patchUserInfoState);
    set(patchUserInfoState, {...patchUserInfo, name: newValue as string});
  },
});
