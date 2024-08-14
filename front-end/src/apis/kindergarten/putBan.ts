import axiosInstance from '@/apis/axiosInstance';
import type {Ban} from '@/types/kindergarten/Ban';

export const putBan = async (data: Ban) => {
  try {
    const response = await axiosInstance.put('/directors/ban', data);
    return response.data;
  } catch (error) {
    console.error('반 등록 중 오류 발생:', error);
    throw error;
  }
};
