export interface AnnounceItemProps {
  title: string;
  writer: string;
  date: string;
  src?: string;
  banName?: string;
  tagbgcolor?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
