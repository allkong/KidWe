import axiosInstance from '@/apis/axiosInstance';
import {LeaveConsentItem} from '@/types/leave-consent/LeaveConsentItem';

export const getLeaveConsentByTeacher = async (
  banId: number,
  year: number,
  month: number
): Promise<LeaveConsentItem[]> => {
  try {
    const response = await axiosInstance.get(
      `leaveconsents/ban/${banId}/${year}/${month}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLeaveConsentByParent = async (
  kidId: number,
  year: number,
  month: number
): Promise<LeaveConsentItem[]> => {
  try {
    const response = await axiosInstance.get(
      `leaveconsents/kid/${kidId}/${year}/${month}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
