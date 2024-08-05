import axiosInstance from '@/apis/axiosInstance';
import {GetFood} from '@/types/food/GetFood';

export const getDailyFood = async (
  kindergartenId: number,
  year: number,
  month: number,
  day: number
): Promise<GetFood> => {
  try {
    const result = await axiosInstance.get(
      `/menus/${kindergartenId}/${year}/${month}/${day}`
    );
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
