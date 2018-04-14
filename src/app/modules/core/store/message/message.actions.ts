import {AbstractAction} from '../util/abstract-action';
import {Message} from '../../../thread/types/message';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export class AddMessageAction extends AbstractAction<Message> {
  get type(): string {
    return ADD_MESSAGE;
  }
}

export type MessageActions = AddMessageAction;
