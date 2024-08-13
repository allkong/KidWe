import dayjs from 'dayjs';
import type {DailyNoteList} from '@/types/daily-note/DailyNoteList';

export const sortedByNewest = (data: DailyNoteList) => {
  return Object.keys(data.dailyNoteListItemResponseDtos)
    .map(key => Number(key))
    .sort((a, b) => b - a)
    .map(key => ({
      day: key,
      items: data.dailyNoteListItemResponseDtos[key.toString()]
        .slice()
        .sort((a, b) =>
          dayjs(b.stringSendTime).isAfter(dayjs(a.stringSendTime)) ? 1 : -1
        ),
    }));
};
