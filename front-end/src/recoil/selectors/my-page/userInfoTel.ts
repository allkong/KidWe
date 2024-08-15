import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';
import {selector} from 'recoil';

export const patchUserTelSelector = selector({
  key: 'patchUserTelSelector',
  get: ({get}) => {
    const userInfo = get(patchUserInfoState);
    return userInfo.dto.tel;
  },
  set: ({get, set}, newValue) => {
    const userInfo = get(patchUserInfoState);
    set(patchUserInfoState, {
      ...userInfo,
      dto: {...userInfo.dto, tel: newValue as string},
    });
  },
});
