export interface City {
  id: number;
  label: string;
  value: string;
}

export const CityOptions: City[] = [
  {id: 1, value: 'seoul', label: '서울특별시'},
  {id: 2, value: 'busan', label: '부산광역시'},
  {id: 3, value: 'daegu', label: '대구광역시'},
  {id: 4, value: 'incheon', label: '인천광역시'},
  {id: 5, value: 'gwangju', label: '광주광역시'},
  {id: 6, value: 'daejeon', label: '대전광역시'},
  {id: 7, value: 'ulsan', label: '울산광역시'},
  {id: 8, value: 'sejong', label: '세종특별자치시'},
  {id: 9, value: 'gyeonggi', label: '경기도'},
  {id: 10, value: 'gangwon', label: '강원특별자치도'},
  {id: 11, value: 'chungbuk', label: '충청북도'},
  {id: 12, value: 'chungnam', label: '충청남도'},
  {id: 13, value: 'jeonbuk', label: '전북특별자치도'},
  {id: 14, value: 'jeonnam', label: '전라남도'},
  {id: 15, value: 'gyeongbuk', label: '경상북도'},
  {id: 16, value: 'gyeongnam', label: '경상남도'},
  {id: 17, value: 'jeju', label: '제주특별자치도'},
];
