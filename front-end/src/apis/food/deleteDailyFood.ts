import axiosInstance from '@/apis/axiosInstance';

export const deleteDailyFood = async (menuId: number) => {
  const result = await axiosInstance.delete(`/menus/${menuId}`);
  return result.data;
};
