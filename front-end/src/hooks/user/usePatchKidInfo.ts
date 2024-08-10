import {patchKidInfo} from '@/apis/user/patchKidInfo';
import {PatchKidInfo} from '@/types/user/PatchKidInfo';
import {useMutation} from '@tanstack/react-query';

export const usePatchKidInfo = () => {
  const kidMutation = useMutation({
    mutationFn: (body: PatchKidInfo) => patchKidInfo(body),
  });
  return kidMutation;
};
