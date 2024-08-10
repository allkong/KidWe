import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';
import {selector} from 'recoil';

export const patchUserIdSelector = selector<number>({
  key: 'patchUserIdSelector',
  get: ({get}) => {
    const patchUserInfo = get(patchUserInfoState);
    return patchUserInfo.id;
  },
  set: ({get, set}, newValue) => {
    const patchUserInfo = get(patchUserInfoState);
    set(patchUserInfoState, {...patchUserInfo, id: newValue as number});
  },
});
