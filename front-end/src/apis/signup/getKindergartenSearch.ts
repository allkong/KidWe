import axiosInstance from '@/apis/axiosInstance';
import {GetKindergarten} from '@/types/kindergarten/GetKindergarten';
import type {KindergartenSearchParams} from '@/types/signup/KindergartenSearchParams';
export const getKindergartenSearch = async (
  kindergartenSearch: KindergartenSearchParams
): Promise<GetKindergarten[]> => {
  console.log('kindergartenSearch', kindergartenSearch);
  try {
    const response = await axiosInstance.get(`/kindergartens`, {
      params: {
        sido: kindergartenSearch.sido,
        sigungu: kindergartenSearch.sigungu,
        search: kindergartenSearch.search,
      },
    });
    console.log('서버의 응답!!', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
