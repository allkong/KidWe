import axiosInstance from '@/apis/axiosInstance';

export const getBanSchedule = async (banId: number, date: string) => {
  const result = await axiosInstance.get(`/schedules/ban/${banId}/${date}`);
  return result.data;
};
