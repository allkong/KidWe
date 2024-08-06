export interface AnnounceItemProps {
  id?: number;
  title: string;
  writer: string;
  date: Date;
  src?: string;
  classname?: string;
  tagbgcolor?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
