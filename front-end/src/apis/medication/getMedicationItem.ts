import axiosInstance from '@/apis/axiosInstance';
import {MedicationItem} from '@/types/medication/MedicationList';

export const getMedicationByTeacher = async (
  banId: number,
  year: number,
  month: number
): Promise<MedicationItem[]> => {
  try {
    const response = await axiosInstance.get(
      `medications/ban/${banId}/${year}/${month}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMedicationByParent = async (
  kidId: number,
  year: number,
  month: number
): Promise<MedicationItem[]> => {
  try {
    const response = await axiosInstance.get(
      `medications/kid/${kidId}/${year}/${month}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
