import {Dayjs} from 'dayjs';

export const foodKeys = {
  all: ['food'] as const,
  detail: (kindergartenId: number, date: Dayjs) => [
    ...foodKeys.all,
    'detail',
    kindergartenId,
    date.get('year'),
    date.get('month') + 1,
    date.get('date'),
  ],
};
