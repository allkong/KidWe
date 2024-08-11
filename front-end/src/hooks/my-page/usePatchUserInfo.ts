import type {PatchUserInfo} from '@/types/user/PatchUserInfo';
import {patchUserInfo} from '@/apis/my-page/patchUserInfo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {userKeys} from './userKeys';

export const usePatchUserInfo = (userId: number) => {
  const queryClient = useQueryClient();
  const userInfoMutation = useMutation({
    mutationFn: (body: PatchUserInfo) => patchUserInfo(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.user(userId),
      });
    },
  });
  return userInfoMutation;
};
