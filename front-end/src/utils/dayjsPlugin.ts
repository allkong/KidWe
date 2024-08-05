import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ko'; // 한국어 로케일

// 플러그인 사용 설정
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

// 한국어 로케일 설정
dayjs.locale('ko');

// 날짜 형식 커스텀
export const formatDate = (date: dayjs.Dayjs, format: string): string => {
  return date.format(format);
};

export const getToday = (format: string = 'YYYY년 M월 D일'): string => {
  return formatDate(dayjs(), format);
};

export const getTomorrow = (format: string = 'M월 D일'): string => {
  return formatDate(dayjs().add(1, 'day'), format);
};

export const getDayAfterTomorrow = (format: string = 'M월 D일'): string => {
  return formatDate(dayjs().add(2, 'day'), format);
};

export const formatDateToMD = (dateString: string): string => {
  const date = dayjs(dateString, 'YYYY-MM-DD');
  return date.format('M월 D일');
};

// 시간 형식 커스텀
export const getCurrentTimeInTimezone = (
  tz: string,
  format: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  return dayjs().tz(tz).format(format);
};

export default dayjs;
