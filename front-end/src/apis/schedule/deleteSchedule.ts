import axiosInstance from '@/apis/axiosInstance';

export const deleteSchedule = async (scheduleId: number) => {
  const result = await axiosInstance.delete(`/schedules/${scheduleId}`);
  return result.data;
};
