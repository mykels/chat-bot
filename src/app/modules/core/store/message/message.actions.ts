import {Action} from '@ngrx/store';
import {Message} from '../../../thread/types/message';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export class AddMessageAction implements Action {
  readonly type = ADD_MESSAGE;
  payload: Message;

  constructor(addedMessage: Message) {
    this.payload = addedMessage;
  }
}

export type MessageActions = AddMessageAction;
