interface Post {
  createdDateTime: string;
  title: string;
  content: string;
  picture: string; // 배열로 바뀌어야 함
}

interface Kid {
  id: number;
  name: string;
  birthday: string;
  startAttendanceDate: string;
  gender: string;
  allergies: string[];
  picture: string; // 프로필 이미지
  banId: string;
  stopId: number;
  busId: number;
  deleted: boolean;
  take: boolean;
}

interface Writer {
  id: number;
  name: string;
  email: string;
  tel: string;
  role: string;
}

interface Comment {
  id: number;
  member: Member;
}

interface Member {
  id: number;
  name: string;
  email: string;
  tel: string;
}

export interface KidOfDailyNote {
  id: number;
  post: Post;
  kid: Kid;
  writer: Writer;
  comments: Comment[];
}
