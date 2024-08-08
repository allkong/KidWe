export const {getToken, setToken, deleteToken} = (() => {
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
