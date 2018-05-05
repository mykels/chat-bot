import {AbstractAction} from '../util/abstract-action';
import {Message} from '../../../message/types/message';
import {User} from '../../../user/types/user';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_SEEN_MESSAGE = 'UPDATE_SEEN_MESSAGE';

export class AddMessageAction extends AbstractAction<{ message: Message, loggedUser: User }> {
    constructor(message: Message, loggedUser: User) {
        super(ADD_MESSAGE, {message, loggedUser});
    }
}

export class UpdateSeenMessageAction extends AbstractAction<Message> {
    constructor(message: Message) {
        super(UPDATE_SEEN_MESSAGE, message);
    }
}
