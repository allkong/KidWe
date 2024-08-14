import axiosInstance from '@/apis/axiosInstance';

export const postNotification = async (notification: Notification) => {
  console.log('hi');
  const result = await axiosInstance.post('/notification', notification);
  return result.data;
};
