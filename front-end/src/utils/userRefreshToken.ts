import {RefreshToken} from '@/types/login/RefreshToken';

const REFRESH_KEY = 'refresh-token';

export const setRefreshToken = (refreshToken: string) => {
  sessionStorage.setItem(REFRESH_KEY, JSON.stringify({refreshToken}));
};

export const getRefreshToken = (): string | null => {
  const item = sessionStorage.getItem(REFRESH_KEY);
  if (item === null) {
    return null;
  }
  return (JSON.parse(item) as RefreshToken).refreshToken;
};

export const deleteRefreshToken = () => {
  sessionStorage.removeItem(REFRESH_KEY);
};
