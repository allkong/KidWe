import axiosInstance from '@/apis/axiosInstance';

export const deleteMedication = async (medicationId: string): Promise<void> => {
  try {
    const response = await axiosInstance.delete(`medications/${medicationId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
