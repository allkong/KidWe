import {getBanInfomation} from '@/apis/memo/getBanInfomation';
import {useQuery} from '@tanstack/react-query';
import {memoKeys} from '@/hooks/memo/memoKeys';
import type {BanInfomation} from '@/types/memo/BanInfomation';

export const useGetBanInfomation = (banId: number) => {
  const result = useQuery<BanInfomation>({
    queryKey: memoKeys.children(banId),
    queryFn: () => getBanInfomation(banId),
  });
  return result;
};
