import dayjs from 'dayjs';

interface GroupedData<T> {
  [key: string]: T[];
}

interface HasCreatedDateTime {
  medicationCreatedDateTime?: string;
  leaveDate?: string;
}

export const groupByDate = <T extends HasCreatedDateTime>(
  data: T[]
): GroupedData<T> => {
  // 데이터를 날짜별로 그룹화
  const grouped = data.reduce((acc: GroupedData<T>, item) => {
    const dateTime = item.medicationCreatedDateTime || item.leaveDate;
    const date = dayjs(dateTime).format('YYYY-MM-DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // 그룹화된 데이터를 날짜 최신순으로 정렬하고, 각 그룹 내에서도 시간 최신순으로 정렬
  const sortedGroupedData = Object.keys(grouped)
    .sort((a, b) => (dayjs(b).isAfter(dayjs(a)) ? 1 : -1))
    .reduce((acc: GroupedData<T>, key) => {
      acc[key] = grouped[key].sort((a, b) =>
        dayjs(b.medicationCreatedDateTime || b.leaveDate).isAfter(
          dayjs(a.medicationCreatedDateTime || a.leaveDate)
        )
          ? 1
          : -1
      );
      return acc;
    }, {});

  return sortedGroupedData;
};
