import axiosInstance from '@/apis/axiosInstance';

export const sendFcmToken = async (token: string): Promise<string> => {
  try {
    const response = await axiosInstance.post('/notification/token', null, {
      params: {
        notificationToken: token,
      },
    });
    return response.data;
  } catch (error) {
    console.debug(`postNotification 전송 Error!!!: ${error}`);
    throw error;
  }
};
