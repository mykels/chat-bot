import {User} from '../../../user/types/user';
import {Message} from '../../../thread/types/message';
import {Thread} from '../../../thread/types/thread';

export interface AppState {
  users: User[];
  messages: Message[];
  threads: Thread[];
}
