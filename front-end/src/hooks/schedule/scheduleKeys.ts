export const scheduleKeys = {
  all: ['schedules'] as const,
  kindergartenInfo: (kindergartenId: number) =>
    [...scheduleKeys.all, kindergartenId] as const,
  schedules: (kindergartenId: number, date: string) =>
    [...scheduleKeys.kindergartenInfo(kindergartenId), date] as const,
};
