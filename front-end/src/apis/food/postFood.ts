import axiosInstance from '@/apis/axiosInstance';
import {PostFood} from '@/types/food/PostFood';

export const postFood = async (kindergartenId: number, body: PostFood) => {
  const result = await axiosInstance.post(`/menus/${kindergartenId}`, body);
  return result.data;
};
