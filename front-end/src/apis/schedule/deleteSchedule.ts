import axiosInstance from '@/apis/axiosInstance';

export const deleteSchedule = async (scheduleId: number) => {
  try {
    const result = await axiosInstance.delete(`/schedules/${scheduleId}`);
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
