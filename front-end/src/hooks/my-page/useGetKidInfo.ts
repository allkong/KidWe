import {getKidInfo} from '@/apis/my-page/getKidInfo';
import {useQuery} from '@tanstack/react-query';
import {userKeys} from '@/hooks/my-page/userKeys';
import {GetKidInfo} from '@/types/user/GetKidInfo';

export const useGetKidInfo = (kidId: number) => {
  const result = useQuery<GetKidInfo>({
    queryKey: userKeys.kid(kidId),
    queryFn: () => getKidInfo(kidId),
  });
  return result;
};
