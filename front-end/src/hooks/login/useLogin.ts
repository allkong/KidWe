import {login} from '@/apis/login/login';
import {useMutation} from '@tanstack/react-query';
import {jwtToken} from '@/utils/jwtToken';
import {LoginResponse} from '@/types/login/LoginResponse';

/**
 *
 * @param email
 * @param password
 * @returns 성공적으로 요청을 하면 cookie에 refresh token을, body에 access token을 담아서 응답한다.
 */
export const useLogin = () => {
  const {setToken} = jwtToken();

  const result = useMutation({
    mutationFn: ({email, password}: {email: string; password: string}) => {
      return login(email, password);
    },
    onSuccess: (data: LoginResponse) => {
      const {accessToken} = data;
      setToken(accessToken);
    },
  });
  return result;
};
