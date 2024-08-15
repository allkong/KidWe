import axiosInstance from '@/apis/axiosInstance';

export const postLeaveConsent = async (
  kidId: number,
  formData: FormData,
  memberId: number
): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      `leaveconsents/${kidId}?memberId=${memberId}`,
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
