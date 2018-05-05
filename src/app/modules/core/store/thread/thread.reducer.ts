import {AbstractReducer} from '../util/abstract-reducer';
import {Thread} from '../../../thread/types/thread';
import {
    ADD_THREAD,
    AddThreadAction,
    CLOSE_THREAD,
    CloseThreadAction,
    OPEN_THREAD,
    OpenThreadAction,
    UPDATE_THREAD,
    UpdateThreadAction
} from './thread.actions';
import {ADD_MESSAGE, AddMessageAction} from '../message/message.actions';
import {Message} from '../../../message/types/message';
import {generateId} from '../../services/utils';
import {User} from '../../../user/types/user';

export class ThreadReducer extends AbstractReducer<Thread[]> {
    constructor() {
        super();
        this.register(ADD_THREAD, (threads: Thread[], action: AddThreadAction) => this.addThread(threads, action));
        this.register(UPDATE_THREAD, (threads: Thread[], action: UpdateThreadAction) => this.updateThread(threads, action));
        this.register(OPEN_THREAD, (threads: Thread[], action: OpenThreadAction) => this.openThread(threads, action));
        this.register(CLOSE_THREAD, (threads: Thread[], action: CloseThreadAction) => this.closeThread(threads, action));
        this.register(ADD_MESSAGE, (threads: Thread[], action: AddMessageAction) => this.addMessageToThread(threads, action));
    }

    addThread(threads: Thread[], action: AddThreadAction): Thread[] {
        const newThread: Thread = action.payload;
        console.log(`handling dispatched action [${ADD_THREAD}] with thread [${newThread.id}]`);
        return [...threads, newThread];
    }

    updateThread(threads: Thread[], action: AddThreadAction): Thread[] {
        const threadToUpdate: Thread = action.payload;
        console.log(`handling dispatched action [${UPDATE_THREAD}] with thread [${threadToUpdate.id}]`);
        return [...threads.filter(thread => thread.id !== threadToUpdate.id), {...threadToUpdate}];
    }

    openThread(threads: Thread[], action: OpenThreadAction): Thread[] {
        const threadToOpen: Thread = action.payload;
        console.log(`handling dispatched action [${OPEN_THREAD}] with thread [${threadToOpen.id}]`);
        threadToOpen.opened = true;
        const closedThreads = threads.filter(thread => thread.id !== threadToOpen.id);
        return [...closedThreads, {...threadToOpen}];
    }

    closeThread(threads: Thread[], action: CloseThreadAction): Thread[] {
        const threadToClose: Thread = action.payload;
        console.log(`handling dispatched action [${CLOSE_THREAD}] with thread [${threadToClose.id}]`);
        threadToClose.opened = false;
        const openedThreads = threads.filter(thread => thread.id !== threadToClose.id);
        return [...openedThreads, {...threadToClose}];
    }

    addMessageToThread(threads: Thread[], action: AddMessageAction): Thread[] {
        const message: Message = action.payload.message;
        const loggedUser: User = action.payload.loggedUser;
        const [matchingThread] = threads.filter(thread =>
            (thread.user === message.sender) || (thread.user === message.receiver));

        if (matchingThread) {
            matchingThread.messages = [...matchingThread.messages, message.id];
            matchingThread.summary = message.content;
            return [...threads.filter(thread => thread.id !== matchingThread.id)]
                .concat({...matchingThread});
        }

        return [...threads].concat(this.constructThreadFromMessage(message, loggedUser));
    }

    private constructThreadFromMessage(message: Message, loggedUser: User): Thread {
        return {
            id: generateId(),
            user: message.sender === loggedUser.id ? message.receiver : message.sender,
            summary: message.content,
            date: message.date,
            messages: [message.id],
            notified: false
        };
    }
}
