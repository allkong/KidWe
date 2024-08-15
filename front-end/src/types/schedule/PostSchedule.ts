export interface PostSchedule {
  keyword: string;
  content: string;
  localDate: string; // "2024-05-12"
  scheduleType: 'EVENT' | 'CLASS' | 'ALLNOTICE';
}
