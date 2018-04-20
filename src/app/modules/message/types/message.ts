export interface Message {
  id: string;
  sender?: string;
  receiver?: string;
  content: string;
  self: boolean;
  seen: boolean;
  date: Date;
}
