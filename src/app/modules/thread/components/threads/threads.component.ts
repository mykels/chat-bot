import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Thread} from '../../types/thread';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {Message} from '../../types/message';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'cb-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsComponent implements OnInit {
  threads$: Observable<Thread[]>;
  messages$: Observable<Message[]>;
  selectedThread: Thread;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initThreads();
  }

  initThreads() {
    this.threads$ = this.store.select('threads');
  }

  extractId(thread: Thread) {
    return thread.id;
  }

  selectThread(thread: Thread) {
    this.selectedThread = thread;
    this.initMessages();
  }

  initMessages() {
    this.messages$ = this.store.select('messages')
      .map(messages => messages.filter(message => {
        // this is no good, combine latest should be applied here
        this.threads$.map(threads => threads
          .filter(thread => thread.id === this.selectedThread.id))
          .subscribe(selectedThread => {
            return this.selectedThread.messages.indexOf(message.id) !== -1;
          });
      }));
  }
}
