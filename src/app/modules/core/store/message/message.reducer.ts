import {ADD_MESSAGE, AddMessageAction, UPDATE_SEEN_MESSAGE, UpdateSeenMessageAction} from './message.actions';
import {AbstractReducer} from '../util/abstract-reducer';
import {Message} from '../../../message/types/message';

export class MessageReducer extends AbstractReducer<Message[]> {
    constructor() {
        super();
        this.register(ADD_MESSAGE, this.addMessage);
        this.register(UPDATE_SEEN_MESSAGE, this.updateSeenMessage);
    }

    addMessage(messages: Message[], action: AddMessageAction): Message[] {
        const newMessage: Message = action.payload.message;
        console.log(`handling dispatched action [${ADD_MESSAGE}] with message [${newMessage.id}]`);
        return [...messages, newMessage];
    }

    updateSeenMessage(messages: Message[], action: UpdateSeenMessageAction): Message[] {
        const seenMessage: Message = action.payload;
        console.log(`handling dispatched action [${UPDATE_SEEN_MESSAGE}] with message [${seenMessage.id}]`);
        seenMessage.seen = true;
        return [...messages.filter(message => message.id !== seenMessage.id), seenMessage];
    }
}
