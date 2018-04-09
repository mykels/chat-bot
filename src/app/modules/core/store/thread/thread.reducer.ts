import {AbstractReducer} from '../util/abstract-reducer';
import {Thread} from '../../../thread/types/thread';
import {ADD_THREAD, ThreadActions, UPDATE_THREAD} from './thread.actions';

export class ThreadReducer extends AbstractReducer<Thread[], ThreadActions> {
  constructor() {
    super();
    this.register(ADD_THREAD, this.addThread);
    this.register(UPDATE_THREAD, this.updateThread);
  }

  addThread(threads: Thread[], action: ThreadActions): Thread[] {
    const newThread: Thread = action.payload;
    console.log(`handling dispatched action [${ADD_THREAD}] with thread [${newThread.id}]`);
    return [...threads, newThread];
  }

  updateThread(threads: Thread[], action: ThreadActions): Thread[] {
    const updatedThread: Thread = action.payload;
    console.log(`handling dispatched action [${UPDATE_THREAD}] with thread [${updatedThread.id}]`);
    return [...threads.filter(thread => thread.id !== updatedThread.id), {...updatedThread}];
  }
}
