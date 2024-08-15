import axiosInstance from '@/apis/axiosInstance';

export const postDailyNote = async (
  memberId: number,
  formData: FormData
): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      `dailynotes/${memberId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
