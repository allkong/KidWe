import axiosInstance from '@/apis/axiosInstance';

/**
 * @param body
 * dto: {
 * id: number;
 * name: string;
 * birthday: string; // YYYY-MM-DD
 * gender: 'MALE' | 'FEMALE';
 * allergies: string[];
 * banId: number;
 * kindergartenId: number;
 * };
 * picture: string;
 * @returns
 */
export const patchKidInfo = async (body: FormData) => {
  const result = await axiosInstance.patch('/kids', body);
  return result.data;
};
