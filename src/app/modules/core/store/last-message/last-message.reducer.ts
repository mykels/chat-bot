import {AbstractReducer} from '../util/abstract-reducer';
import {Message} from '../../../message/types/message';
import {UPDATE_LAST_MESSAGE, UpdateLastMessageAction} from './last-message.actions';

export class LastMessageReducer extends AbstractReducer<Message> {
  constructor() {
    super();
    this.register(UPDATE_LAST_MESSAGE, this.updateSeenMessage);
  }

  updateSeenMessage(messages: Message, action: UpdateLastMessageAction): Message {
    const lastMessage: Message = action.payload;
    console.log(`handling dispatched action [${UPDATE_LAST_MESSAGE}] with last message [${lastMessage.id}]`);
    return {...lastMessage};
  }
}
