import {login} from '@/apis/login/login';
import {useMutation} from '@tanstack/react-query';
import {LoginResponse} from '@/types/login/LoginResponse';
import {setAccessToken} from '@/utils/userAccessToken';
import {setUserData} from '@/utils/userData';
import {setRefreshToken} from '@/utils/userRefreshToken';

/**
 *
 * @param email
 * @param password
 * @returns 성공적으로 요청을 하면 cookie에 refresh token을, body에 access token을 담아서 응답한다.
 */
export const useLogin = () => {
  const result = useMutation({
    mutationFn: ({email, password}: {email: string; password: string}) => {
      return login(email, password);
    },
    onSuccess: (data: LoginResponse) => {
      const {accessToken, refreshToken, ...userData} = data;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUserData(userData);
    },
  });
  return result;
};
