import axiosInstance from '@/apis/axiosInstance';
import {PostFood} from '@/types/food/PostFood';

export const putDailyFood = async (menuId: number, body: PostFood) => {
  const result = await axiosInstance.put(`menus/${menuId}`, body);
  return result.data;
};
