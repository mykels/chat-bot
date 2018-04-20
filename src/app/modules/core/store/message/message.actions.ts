import {AbstractAction} from '../util/abstract-action';
import {Message} from '../../../message/types/message';
import {User} from '../../../user/types/user';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export class AddMessageAction extends AbstractAction<{ message: Message, loggedUser: User }> {
  constructor(message: Message, private loggedUser: User) {
    super({message, loggedUser});
  }

  get type(): string {
    return ADD_MESSAGE;
  }
}

export type MessageActions = AddMessageAction;
