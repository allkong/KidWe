import {Comment} from '@/types/article/Comment';

export interface ArticleOfAnnouncement {
  picture: string;
  role: string;
  banName: string;
  post: Post;
  images: string[];
  voteId: number;
  voteItems: VoteItem[];
  commentCount: number;
  comments: Comment[];
  canDelete: boolean;
}

interface Post {
  createdDateTime: string;
  title: string;
  content: string;
}

interface VoteItem {
  voteItemId: number;
  itemName: string;
  value: number;
}
