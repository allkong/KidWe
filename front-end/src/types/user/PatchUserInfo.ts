export interface PatchUserInfo {
  dto: {
    id: number;
    name: string;
    tel: string;
    password: string;
  };
  picture: string | undefined;
}
