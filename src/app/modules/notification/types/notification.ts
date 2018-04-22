export interface Notification {
  id: string;
  user: string;
  content: string;
  selected?: boolean;
  data: Date;
}
