import {RoleItem} from '@/enum/roleItem';

interface Kid {
  id: number;
  name: string;
}

interface Writer {
  id: number;
  name: string;
  email: string;
  tel: string;
  picture: string;
  role: RoleItem;
}

export interface DailyNoteItem {
  id: number;
  kid: Kid;
  writer: Writer;
  sendTime: string;
  stringSendTime: string;
}

export interface DailyNoteList {
  dailyNoteListItemResponseDtos: Record<string, DailyNoteItem[]>;
}
