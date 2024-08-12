import {getAccessToken} from '@/utils/userAccessToken';
import {getUserData} from '@/utils/userData';
import {getRefreshToken} from '@/utils/userRefreshToken';

export const isValidUser = () => {
  return (
    getUserData() !== null &&
    // getMemberStatus() === 'ACCEPT' &&
    getRefreshToken() !== null &&
    getAccessToken() !== null
  );
};
