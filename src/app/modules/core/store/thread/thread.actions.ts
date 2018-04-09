import {Action} from '@ngrx/store';
import {Thread} from '../../../thread/types/thread';

export const ADD_THREAD = 'ADD_THREAD';
export const UPDATE_THREAD = 'UPDATE_THREAD';

export class AddThreadAction implements Action {
  readonly type = ADD_THREAD;
  payload: Thread;

  constructor(addedThread: Thread) {
    this.payload = addedThread;
  }
}

export class UpdateThreadAction implements Action {
  readonly type = UPDATE_THREAD;
  payload: Thread;

  constructor(updatedThread: Thread) {
    this.payload = updatedThread;
  }
}

export type ThreadActions = AddThreadAction | UpdateThreadAction;
