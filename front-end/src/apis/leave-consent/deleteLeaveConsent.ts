import axiosInstance from '@/apis/axiosInstance';

export const deleteLeaveConsent = async (
  leaveConsentId: string
): Promise<void> => {
  try {
    const response = await axiosInstance.delete(
      `leaveconsents/${leaveConsentId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
