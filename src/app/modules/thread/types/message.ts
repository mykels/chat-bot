export interface Message {
  id: number;
  sender?: number;
  receiver?: number;
  content: string;
  date: Date;
}
