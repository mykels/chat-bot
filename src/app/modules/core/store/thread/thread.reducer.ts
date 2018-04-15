import {AbstractReducer} from '../util/abstract-reducer';
import {Thread} from '../../../thread/types/thread';
import {ADD_THREAD, ThreadActions} from './thread.actions';
import {ADD_MESSAGE} from '../message/message.actions';
import {Message} from '../../../thread/types/message';

export class ThreadReducer extends AbstractReducer<Thread[], ThreadActions> {
  constructor() {
    super();
    this.register(ADD_THREAD, (threads: Thread[], action: ThreadActions) => this.addThread(threads, action));
    this.register(ADD_MESSAGE, (threads: Thread[], action: ThreadActions) => this.addMessageToThread(threads, action));
  }

  addThread(threads: Thread[], action: ThreadActions): Thread[] {
    const newThread: Thread = action.payload;
    console.log(`handling dispatched action [${ADD_THREAD}] with thread [${newThread.id}]`);
    return [...threads, newThread];
  }

  addMessageToThread(threads: Thread[], action: any): Thread[] {
    const message: Message = action.payload;
    const [matchingThread] = threads.filter(thread =>
      thread.sender === message.sender);

    if (matchingThread) {
      matchingThread.messages = [...matchingThread.messages, message.id];
      return [...threads.filter(thread => thread.id !== matchingThread.id)]
        .concat({...matchingThread});
    }

    return [...threads].concat(this.constructThreadFromMessage(message));
  }

  private constructThreadFromMessage(message: Message): Thread {
    return {
      id: Math.floor(Math.random() * 100000),
      sender: message.sender,
      receiver: message.receiver,
      summary: message.content,
      date: message.date,
      messages: [message.id]
    };
  }
}
