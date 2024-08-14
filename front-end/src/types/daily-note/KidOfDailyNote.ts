import {RoleItem} from '@/enum/roleItem';
import {Comment} from '@/types/article/Comment';

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
