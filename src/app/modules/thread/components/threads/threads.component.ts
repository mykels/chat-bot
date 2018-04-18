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
    this.initMessages();
  }

  extractId(thread: Thread) {
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
  }

  private initMessages() {
    this.messages$ = this.store.select('messages');
  }
}
