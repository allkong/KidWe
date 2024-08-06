import axiosInstance from '@/apis/axiosInstance';
import {kidOfMedication} from '@/types/medication/kidOfMedication';

export const getMedicationDetail = async (
  medicationId: string
): Promise<kidOfMedication> => {
  try {
    const response = await axiosInstance.get(`medications/${medicationId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
