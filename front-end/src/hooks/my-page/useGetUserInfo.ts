import {getUserInfo} from '@/apis/my-page/getUserInfo';
import {useQuery} from '@tanstack/react-query';
import {userKeys} from '@/hooks/my-page/userKeys';
import {GetUserInfo} from '@/types/user/GetUserInfo';

export const useGetUserInfo = (userId: number) => {
  const result = useQuery<GetUserInfo>({
    queryKey: userKeys.user(userId),
    queryFn: getUserInfo,
    enabled: !!userId,
  });
  return result;
};
