import {selector} from 'recoil';
import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';

export const patchUserNameSelector = selector<string>({
  key: 'patchUserNameSelector',
  get: ({get}) => {
    const patchUserInfo = get(patchUserInfoState);
    return patchUserInfo.dto.name;
  },
  set: ({get, set}, newValue) => {
    const patchUserInfo = get(patchUserInfoState);
    set(patchUserInfoState, {
      ...patchUserInfo,
      dto: {...patchUserInfo.dto, name: newValue as string},
    });
  },
});
