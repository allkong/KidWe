import axiosInstance from '@/apis/axiosInstance';
import {PostFood} from '@/types/food/PostFood';

export const postFood = async (kindergartenId: number, body: PostFood) => {
  try {
    axiosInstance.post(`/menus/${kindergartenId}`, body);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
