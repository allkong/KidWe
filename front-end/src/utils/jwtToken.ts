export const jwtToken = () => {
  let accessToken: string | null = null;

  const getAccessToken = () => accessToken;
  const setAccessToken = (value: string) => (accessToken = value);
  const deleteAccessToken = () => (accessToken = null);

  return {
    getToken: getAccessToken,
    setToken: setAccessToken,
    deleteToken: deleteAccessToken,
  };
};
