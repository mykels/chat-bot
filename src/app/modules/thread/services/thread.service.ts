import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/store/types/app-state';
import {Thread} from '../types/thread';
import {AddThreadAction} from '../../core/store/thread/thread.actions';

@Injectable()
export class ThreadService {
  constructor(private store: Store<AppState>) {
    this.init();
  }

  init() {
    this.initThreads();
  }

  initThreads() {
    this.dispatchNewThread({id: 1, sender: 1, receiver: 6, summary: 'This is a summary', date: new Date(), messages: []});
    this.dispatchNewThread({id: 2, sender: 2, receiver: 6, summary: 'This is a summary', date: new Date(), messages: []});
    this.dispatchNewThread({id: 3, sender: 3, receiver: 6, summary: 'This is a summary', date: new Date(), messages: []});
    this.dispatchNewThread({id: 4, sender: 4, receiver: 6, summary: 'This is a summary', date: new Date(), messages: []});
    this.dispatchNewThread({id: 5, sender: 5, receiver: 6, summary: 'This is a summary', date: new Date(), messages: []});
  }

  dispatchNewThread(thread: Thread) {
    this.store.dispatch(new AddThreadAction(thread));
  }
}
