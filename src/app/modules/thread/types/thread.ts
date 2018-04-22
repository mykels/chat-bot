export class Thread {
  id: string;
  user: string;
  summary: string;
  date: Date;
  opened?: boolean;
  messages: string[];
}
