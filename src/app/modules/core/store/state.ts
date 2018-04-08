import {User} from '../../user/types/user';
import {Message} from '../../messages/types/message';

export interface AppState {
  users: User[];
  messages: Message[];
}

export const initialState: AppState = {
  users: [],
  messages: []
};
