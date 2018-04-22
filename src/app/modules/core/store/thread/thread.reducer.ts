import {AbstractReducer} from '../util/abstract-reducer';
import {Thread} from '../../../thread/types/thread';
import {ADD_THREAD, CLOSE_THREAD, OPEN_THREAD, ThreadActions} from './thread.actions';
import {ADD_MESSAGE} from '../message/message.actions';
import {Message} from '../../../message/types/message';
import {generateId} from '../../services/utils';
import {User} from '../../../user/types/user';

export class ThreadReducer extends AbstractReducer<Thread[], ThreadActions> {
  constructor() {
    super();
    this.register(ADD_THREAD, (threads: Thread[], action: ThreadActions) => this.addThread(threads, action));
    this.register(OPEN_THREAD, (threads: Thread[], action: ThreadActions) => this.openThread(threads, action));
    this.register(CLOSE_THREAD, (threads: Thread[], action: ThreadActions) => this.closeThread(threads, action));
    this.register(ADD_MESSAGE, (threads: Thread[], action: ThreadActions) => this.addMessageToThread(threads, action));
  }

  addThread(threads: Thread[], action: ThreadActions): Thread[] {
    const newThread: Thread = action.payload;
    console.log(`handling dispatched action [${ADD_THREAD}] with thread [${newThread.id}]`);
    return [...threads, newThread];
  }

  openThread(threads: Thread[], action: ThreadActions): Thread[] {
    const threadToOpen: Thread = action.payload;
    console.log(`handling dispatched action [${OPEN_THREAD}] with thread [${threadToOpen.id}]`);
    threadToOpen.opened = true;
    const closedThreads = threads.filter(thread => thread.id !== threadToOpen.id);
    return [...closedThreads, {...threadToOpen}];
  }

  closeThread(threads: Thread[], action: ThreadActions): Thread[] {
    const threadToClose: Thread = action.payload;
    console.log(`handling dispatched action [${CLOSE_THREAD}] with thread [${threadToClose.id}]`);
    threadToClose.opened = false;
    const openedThreads = threads.filter(thread => thread.id !== threadToClose.id);
    return [...openedThreads, {...threadToClose}];
  }

  addMessageToThread(threads: Thread[], action: any): Thread[] {
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
      messages: [message.id]
    };
  }
}
