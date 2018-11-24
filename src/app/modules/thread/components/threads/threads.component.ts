import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Thread} from '../../types/thread';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {Message} from '../../../message/types/message';

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
    this.initMessages();
  }

  trackByThreadId(thread: Thread) {
    return thread.id;
  }

  selectThread(thread: Thread) {
    this.threads$.subscribe(scannedThreads => {
      const [selectedThread] = scannedThreads.filter(scannedThread => scannedThread.id === thread.id);
      this.selectedThread = selectedThread;
    });
  }

  private initThreads() {
    this.threads$ = this.store.select('threads');
    this.threads$.subscribe(threads => {
      const [threadToOpen] = threads.filter(thread => thread.opened);
      this.selectedThread = threadToOpen;
    });
  }

  private initMessages() {
    this.messages$ = this.store.select('messages');
  }
}
