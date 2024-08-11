import {patchKidInfo} from '@/apis/my-page/patchKidInfo';
import {PatchKidInfo} from '@/types/user/PatchKidInfo';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {userKeys} from './userKeys';

export const usePatchKidInfo = (kidId: number) => {
  const queryClient = useQueryClient();
  const kidMutation = useMutation({
    mutationFn: (body: PatchKidInfo) => patchKidInfo(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.kid(kidId),
      });
    },
  });
  return kidMutation;
};
