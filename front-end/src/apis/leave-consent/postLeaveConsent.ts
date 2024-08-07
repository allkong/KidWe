import axiosInstance from '@/apis/axiosInstance';

export const postLeaveConsent = async (
  leaveConsentId: number,
  formData: FormData
): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      `leaveconsents/${leaveConsentId}`,
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
