import {RoleItem} from '@/enum/roleItem';

interface Child {
  id: number;
  name: string;
  picture: string;
  role: RoleItem;
  canDelete: boolean;
  isDelete: boolean;
  content: string;
  createdTime: string;
}

interface Comment {
  id: number;
  role: RoleItem;
  name: string;
  picture: string;
  canDelete: boolean;
  isDelete: boolean;
  content: string;
  childs: Child[];
  createdTime: string;
}

export interface KidOfDailyNote {
  id: number;
  name: string;
  picture: string;
  role: RoleItem;
  content: string;
  sendTime: string;
  images: string[];
  thumbnails: string[];
  canDelete: boolean;
  commentCount: number;
  comments: Comment[];
}
