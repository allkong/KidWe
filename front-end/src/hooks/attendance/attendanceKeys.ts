export const attendanceKeys = {
  all: ['attendance'] as const,
  lists: (banId: number, year: number, month: number, date: number) =>
    [...attendanceKeys.all, banId, year, month, date] as const,
};
