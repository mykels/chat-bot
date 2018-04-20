import {User} from '../../../user/types/user';
import {Thread} from '../../../thread/types/thread';
import {Message} from '../../../message/types/message';

export interface AppState {
  users: User[];
  messages: Message[];
  threads: Thread[];
}

