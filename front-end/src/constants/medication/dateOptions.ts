import {getToday, getTomorrow, getDayAfterTomorrow} from '@/utils/dayjsPlugin';

export const DATE_OPTIONS = [
  {label: '오늘', date: getToday('YYYY-MM-DD')},
  {label: '내일', date: getTomorrow('YYYY-MM-DD')},
  {label: '모레', date: getDayAfterTomorrow('YYYY-MM-DD')},
];
