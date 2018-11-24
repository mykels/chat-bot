import {User} from '../../../user/types/user';
import {Thread} from '../../../thread/types/thread';
import {Message} from '../../../message/types/message';
import {Notification} from '../../../notification/types/notification';

export interface AppState {
  users: User[];
  messages: Message[];
  lastMessage: Message;
  threads: Thread[];
  notifications: Notification[];
}

