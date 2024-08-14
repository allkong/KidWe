interface Post {
  createDateTime: string;
  title: string;
  content: string;
  picture: string;
}

interface VoteItem {
  voteItemId: number;
  itemName: string;
  value: number;
}

interface Comment {
  commentId: number;
  parentCommentId: number;
  memberName: string;
  content: string;
  dateTimeWritten: string;
}

export interface ArticleOfAnnouncement {
  banName: string;
  post: Post;
  annoucementImages: string[];
  voteId: number;
  voteItems: VoteItem[];
  commentCnt: number;
  comment: Comment[];
}
