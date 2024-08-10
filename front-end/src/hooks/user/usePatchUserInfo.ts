import type {PatchUserInfo} from '@/types/user/PatchUserInfo';
import {patchUserInfo} from '@/apis/user/patchUserInfo';
import {useMutation} from '@tanstack/react-query';

export const usePatchUserInfo = () => {
  const userInfoMutation = useMutation({
    mutationFn: (body: PatchUserInfo) => patchUserInfo(body),
  });
  return userInfoMutation;
};
