interface Schedule {
  keyword: string;
  content: string;
}

export interface TeacherOfMemoInfo {
  teacherId: number;
  teacherName: string;
  kidId: number;
  kidName: string;
  gender: string;
  birthday: string;
  kindergartenName: string;
  banName: string;
  schedules: Schedule[];
}
