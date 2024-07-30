import dayjs from 'dayjs';

interface MedicationData {
  kidName: string;
  banName: string;
  kidDate: string;
}

interface GroupedData {
  [key: string]: MedicationData[];
}

export const groupByDate = (data: MedicationData[]): GroupedData => {
  // 데이터를 날짜별로 그룹화
  const grouped = data.reduce((acc: GroupedData, item) => {
    const date = dayjs(item.kidDate).format('YYYY-MM-DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // 그룹화된 데이터를 날짜 최신순으로 정렬
  const sortedGroupedData = Object.keys(grouped)
    .sort((a, b) => (dayjs(b).isAfter(dayjs(a)) ? 1 : -1))
    .reduce((acc: GroupedData, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {});

  return sortedGroupedData;
};
