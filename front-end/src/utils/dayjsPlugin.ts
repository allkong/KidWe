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
export const getToday = (): string => {
  return dayjs().format('YYYY-MM-DD');
};

export const toKorYMD = (): string => {
  return dayjs().format('YYYY년 M월 D일');
};

export const toKorM = (): string => {
  return dayjs().format('M월');
};

// 시간 형식 커스텀
export const getCurrentTimeInTimezone = (tz: string): string => {
  return dayjs().tz(tz).format();
};

export default dayjs;
