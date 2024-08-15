import axiosInstance from '@/apis/axiosInstance';

export const postMedication = async (
  kidId: number,
  formData: FormData,
  memberId: number
): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      `medications/${kidId}?memberId=${memberId}`,
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
