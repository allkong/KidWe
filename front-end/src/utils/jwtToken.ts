let accessToken: string | null = null;

export const jwtToken = () => {
  const getToken = () => accessToken;
  const setToken = (value: string) => (accessToken = value);
  const deleteToken = () => (accessToken = null);

  return {
    getToken,
    setToken,
    deleteToken,
  };
};
