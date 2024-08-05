import dayjs from 'dayjs';
import type {MedicationItem} from '@/types/medication/MedicationList';

interface GroupedData {
  [key: string]: MedicationItem[];
}

export const groupByDate = (data: MedicationItem[]): GroupedData => {
  // 데이터를 날짜별로 그룹화
  const grouped = data.reduce((acc: GroupedData, item) => {
    const date = dayjs(item.medicationCreatedDateTime).format('YYYY-MM-DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // 그룹화된 데이터를 날짜 최신순으로 정렬하고, 각 그룹 내에서도 시간 최신순으로 정렬
  const sortedGroupedData = Object.keys(grouped)
    .sort((a, b) => (dayjs(b).isAfter(dayjs(a)) ? 1 : -1))
    .reduce((acc: GroupedData, key) => {
      acc[key] = grouped[key].sort((a, b) =>
        dayjs(b.medicationCreatedDateTime).isAfter(
          dayjs(a.medicationCreatedDateTime)
        )
          ? 1
          : -1
      );
      return acc;
    }, {});

  return sortedGroupedData;
};
