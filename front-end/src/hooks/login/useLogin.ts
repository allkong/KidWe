import {login} from '@/apis/login/login';
import {useMutation} from '@tanstack/react-query';
import {LoginResponse} from '@/types/login/LoginResponse';
import {setToken} from '@/utils/userToken';
import {setUserData} from '@/utils/userData';

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
      const {accessToken, ...userData} = data;

      console.log(document.cookie);

      setToken(accessToken);
      setUserData(userData);
    },
  });
  return result;
};
