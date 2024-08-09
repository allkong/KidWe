import axiosInstance from '@/apis/axiosInstance';
import {GetKindergarten} from '@/types/kindergarten/GetKindergarten';
export const getKindergartenBan = async (
  kindergartenId: number
): Promise<
  Pick<GetKindergarten, 'name' | 'address' | 'addressDetail' | 'bans'>
> => {
  try {
    const response = await axiosInstance.get(
      `/kindergartens/${kindergartenId}`
    );
    console.log('서버의 응답!!', response.data);
    const {name, address, addressDetail, bans} = response.data;
    return {name, address, addressDetail, bans};
  } catch (error) {
    console.error(error);
    throw error;
  }
};
