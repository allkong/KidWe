import {getUserInfo} from '@/apis/user/getUserInfo';
import {useQuery} from '@tanstack/react-query';
import {userKeys} from '@/hooks/user/userKeys';
import {GetUserInfo} from '@/types/user/GetUserInfo';

export const useGetUserInfo = (userId: number) => {
  const result = useQuery<GetUserInfo>({
    queryKey: userKeys.user(userId),
    queryFn: getUserInfo,
  });
  return result;
};
