import {AbstractAction} from '../util/abstract-action';
import {Message} from '../../../message/types/message';

export const UPDATE_LAST_MESSAGE = 'UPDATE_LAST_MESSAGE';

export class UpdateLastMessageAction extends AbstractAction<Message> {
  constructor(message: Message) {
    super(UPDATE_LAST_MESSAGE, message);
  }
}
