import axiosInstance from '@/apis/axiosInstance';
import {KidOfMedication} from '@/types/medication/KidOfMedication';

export const getMedicationDetail = async (
  medicationId: number
): Promise<KidOfMedication> => {
  try {
    const response = await axiosInstance.get(`medications/${medicationId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
