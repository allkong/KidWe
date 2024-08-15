import {patchUserInfoState} from '@/recoil/atoms/my-page/userInfo';
import {selector} from 'recoil';

export const patchUserPictureSelector = selector({
  key: 'patchUserPictureSelector',
  get: ({get}) => {
    const userInfo = get(patchUserInfoState);
    return userInfo.picture;
  },
  set: ({get, set}, newValue) => {
    const userInfo = get(patchUserInfoState);
    set(patchUserInfoState, {...userInfo, picture: newValue as string});
  },
});
