import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Thread} from '../../types/thread';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {User} from '../../../user/types/user';
import {reduce} from 'rxjs/operators';

@Component({
  selector: 'cb-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsComponent implements OnInit {
  threads$: Observable<Thread[]>;
  userMap$: Observable<Map<string, User>>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initThreads();
    this.initUsers();
  }

  initThreads() {
    this.threads$ = this.store.select('threads');
  }

  initUsers() {
    // TODO: need to map users from threads
    this.userMap$ = this.store.select('users')
      .let(reduce((userMap, user) => userMap, new Map<string, User>()));
  }
}
