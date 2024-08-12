import {redirect} from 'react-router-dom';
import {isValidUser} from '@/utils/isValidUser';
import {deleteAccessToken} from '@/utils/userAccessToken';
import {deleteRefreshToken} from '@/utils/userRefreshToken';
import {deleteUserData} from '@/utils/userData';

export const validateLoader = () => {
  // refresh token으로 access token 요청 로직
  // 발급 실패 시에도 redirect

  if (!isValidUser()) {
    deleteAccessToken();
    deleteRefreshToken();
    deleteUserData();

    return redirect('/login');
  }
  return null;
};
