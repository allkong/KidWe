export const scheduleKeys = {
  all: ['schedules'] as const,
  kindergartenInfo: (kindergartenId: number) =>
    [...scheduleKeys.all, kindergartenId] as const,
  allSchedules: (kindergartenId: number, date: string) =>
    [...scheduleKeys.kindergartenInfo(kindergartenId), date] as const,
  banSchedules: (banId: number, date: string) =>
    [...scheduleKeys.all, banId, date] as const,
};
