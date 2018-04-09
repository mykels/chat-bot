import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Thread} from '../../types/thread';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'cb-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsComponent implements OnInit {
  threads$: Observable<Thread[]>;

  constructor(private store: Store<AppState>, private userService: UserService) {
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

  private getUserById(userId: number) {
    return this.userService.getById(userId);
  }
}
