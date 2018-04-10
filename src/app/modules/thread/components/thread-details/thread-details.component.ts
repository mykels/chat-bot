import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {Thread} from '../../types/thread';
import {UserService} from '../../../user/services/user.service';

// TODO: make thread-details part of threads components instead of an outlined one

@Component({
  selector: 'cb-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadDetailsComponent implements OnInit {
  @Input() thread: Thread;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.initThread();
  }

  // TODO: make thread-details part of threads components instead of an outlined one

  private initThread() {
    ---this.route.params.subscribe(routeParams => {
      const threadId = +routeParams.id;
      this.store.select('threads').subscribe(threads => {
        const [thread] = threads.filter(scannedThread => scannedThread.id === threadId);
        this.thread = thread;
        console.log(this.thread);
      });
    });
  }

  private getUserById(userId: number) {
    return this.userService.getById(userId);
  }
}
