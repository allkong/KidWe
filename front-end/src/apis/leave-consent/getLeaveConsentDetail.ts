import axiosInstance from '@/apis/axiosInstance';
import {KidOfLeaveConsent} from '@/types/leave-consent/KidOfLeaveConsent';

export const getLeaveConsentDetail = async (
  leaveConsentId: number
): Promise<KidOfLeaveConsent> => {
  try {
    const response = await axiosInstance.get(`leaveconsents/${leaveConsentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
