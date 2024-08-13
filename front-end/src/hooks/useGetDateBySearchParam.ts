import dayjs, {Dayjs} from 'dayjs';
import {useSearchParams} from 'react-router-dom';

export const useGetDateBySearchParam = (): Dayjs => {
  const [searchParams] = useSearchParams();
  let date = dayjs(searchParams.get('date'));
  if (!date.isValid()) {
    date = dayjs();
  }
  return date;
};
