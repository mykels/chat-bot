import {ADD_MESSAGE, MessageActions} from './message.actions';
import {AbstractReducer} from '../util/abstract-reducer';
import {Message} from '../../../thread/types/message';

export class MessageReducer extends AbstractReducer<Message[], MessageActions> {
  constructor() {
    super();
    this.register(ADD_MESSAGE, this.addMessage);
  }

  addMessage(messages: Message[], action: MessageActions) {
    const newMessage: Message = action.payload;
    console.log(`handling dispatched action [${ADD_MESSAGE}] with message [${newMessage.id}]`);
    return [...messages, newMessage];
  }
}
