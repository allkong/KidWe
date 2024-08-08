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
  //   role: 'ROLE_GUARDIAN' | 'ROLE_TEACHER' | 'ROLE_DIRECTOR';
  role: RoleItem;
}

export interface DailyNoteItem {
  id: number;
  kid: Kid;
  writer: Writer;
  sendTime: [number, number, number, number, number, number, number]; // 빠질 예정
  stringSendTime: string;
}

export interface DailyNoteList {
  dailyNoteListItemResponseDtos: Record<string, DailyNoteItem[]>;
}
