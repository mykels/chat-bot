import {Message} from '../../../messages/types/message';
import {ADD_MESSAGE, MessageActions} from './message.actions';
import {AbstractReducer} from '../util/abstract-reducer';

class MessageReducer extends AbstractReducer<Message[], MessageActions> {
  reduce(state: Message[], action: MessageActions) {
    return undefined;
  }

}

export const messageReducer = (messages: Message[], action: MessageActions) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: Message = action.payload;
      console.log(`handling dispatched action [${ADD_MESSAGE}] with message [${newMessage.id}]`);
      return [...messages, newMessage];
    default:
      return messages;
  }
};
