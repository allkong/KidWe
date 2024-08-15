export const {
  getToken: getAccessToken,
  setToken: setAccessToken,
  deleteToken: deleteAccessToken,
} = (() => {
  let accessToken: string | null = null;

  const getToken = () => accessToken;
  const setToken = (value: string) => (accessToken = value);
  const deleteToken = () => (accessToken = null);

  return {
    getToken,
    setToken,
    deleteToken,
  };
})();
