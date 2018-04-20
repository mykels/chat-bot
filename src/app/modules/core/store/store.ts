import {AppState} from './types/app-state';
import {MessageReducer} from './message/message.reducer';
import {UserReducer} from './user/user.reducer';
import {ThreadReducer} from './thread/thread.reducer';

export const initialState: AppState = {
  users: [],
  messages: [],
  threads: [],
};

export const reducerMap = {
  users: (state, action) => new UserReducer().reduce(state, action),
  messages: (state, action) => new MessageReducer().reduce(state, action),
  threads: (state, action) => new ThreadReducer().reduce(state, action)
};
