export const memoKeys = {
  all: ['memos'] as const,
  lists: (teacherId: number, year: string, month: string, date: string) =>
    [...memoKeys.all, teacherId, year, month, date] as const,
  detail: (teacherId: number, memoId: string | undefined | null) =>
    [...memoKeys.all, teacherId, memoId] as const,
  tags: (teacherId: number) => [...memoKeys.all, 'tags', teacherId] as const,
  children: (banId: number) => [...memoKeys.all, 'children', banId] as const,
  lessons: (banId: number, date: string) =>
    [...memoKeys.all, 'lessons', banId, date] as const,
};
