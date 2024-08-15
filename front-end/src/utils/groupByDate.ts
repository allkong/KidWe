import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

interface GroupedData<T> {
  [key: string]: T[];
}

interface HasDateTime {
  medicationExecuteDate?: string;
  leaveDate?: string;
}

export const groupByDate = <T extends HasDateTime>(
  data: T[]
): GroupedData<T> => {
  // 데이터를 날짜별로 그룹화
  const grouped = data.reduce((acc: GroupedData<T>, item) => {
    const dateTime = item.medicationExecuteDate || item.leaveDate;
    const date = dayjs(dateTime, 'YYYY년 M월 D일').format('YYYY-MM-DD');
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
        dayjs(b.medicationExecuteDate || b.leaveDate).isAfter(
          dayjs(a.medicationExecuteDate || a.leaveDate)
        )
          ? 1
          : -1
      );
      return acc;
    }, {});

  return sortedGroupedData;
};
