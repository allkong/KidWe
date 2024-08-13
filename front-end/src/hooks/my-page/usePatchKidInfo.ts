import {patchKidInfo} from '@/apis/my-page/patchKidInfo';
import {PatchKidInfo} from '@/types/user/PatchKidInfo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {userKeys} from '@/hooks/my-page/userKeys';

export const usePatchKidInfo = (kidId: number) => {
  const queryClient = useQueryClient();
  const kidMutation = useMutation({
    mutationFn: ({
      info,
      picture,
    }: {
      info: PatchKidInfo;
      picture: File | null;
    }) => {
      const formData = new FormData();
      const {picture: _, ...infos} = info;

      formData.append(
        'dto',
        new Blob([JSON.stringify(infos.dto)], {type: 'application/json'})
      );
      if (picture !== null) {
        formData.append('picture', picture);
      }

      return patchKidInfo(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.kid(kidId),
      });
    },
  });
  return kidMutation;
};
