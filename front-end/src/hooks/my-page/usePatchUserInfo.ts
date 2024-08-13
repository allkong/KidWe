import type {PatchUserInfo} from '@/types/user/PatchUserInfo';
import {patchUserInfo} from '@/apis/my-page/patchUserInfo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {userKeys} from '@/hooks/my-page/userKeys';

export const usePatchUserInfo = (userId: number) => {
  const queryClient = useQueryClient();
  const userInfoMutation = useMutation({
    mutationFn: ({
      info,
      picture,
    }: {
      info: PatchUserInfo;
      picture: File | null;
    }) => {
      const formData = new FormData();
      const {picture: _, ...infos} = info;
      formData.append(
        'dto',
        new Blob([JSON.stringify(infos)], {type: 'application/json'})
      );
      if (picture !== null) {
        formData.append('picture', picture);
      }

      return patchUserInfo(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.user(userId),
      });
    },
  });
  return userInfoMutation;
};
