import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/store/types/app-state';
import {generateId} from '../../core/services/utils';
import {UserService} from '../../user/services/user.service';
import {AddMessageAction} from '../../core/store/message/message.actions';
import {Message} from '../../message/types/message';
import {Notification} from '../../notification/types/notification';
import {filter, map, take} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {OpenThreadAction} from '../../core/store/thread/thread.actions';

@Injectable()
export class ThreadService {
  constructor(private store: Store<AppState>, private userService: UserService) {
  }

  init() {
    this.simulateMessages();
    this.subscribeToSelectedNotifications();
  }

  simulateMessages() {
    this.store.select('users')
      .pipe(take(1))
      .subscribe(users => {
        for (let i = 0; i < users.length / 2; i++) {
          this.dispatchNewMessage({
            id: generateId(),
            sender: this.userService.getLoggedUser().id,
            receiver: users[i].id,
            content: `Hi there ${users[i].name}`,
            date: new Date(),
            self: true,
            seen: false
          });
        }

        this.dispatchNewMessage({
          id: generateId(),
          sender: users[users.length - 1].id,
          receiver: this.userService.getLoggedUser().id,
          content: `Hi there ${this.userService.getLoggedUser().name}`,
          date: new Date(),
          self: false,
          seen: false
        });
      });
  }

  dispatchNewMessage(message: Message) {
    this.store.dispatch(new AddMessageAction(message, this.userService.getLoggedUser()));
  }

  private subscribeToSelectedNotifications() {
    const selectedNotifications$ = this.store.select('notifications').pipe(
      map(notifications => notifications.filter(notification => notification.selected)),
      filter(selectedNotifications => selectedNotifications.length > 0));

    const threads$ = this.store.select('threads').pipe(take(1)); // TODO: this is a temporary solution

    // TODO: something is fishy here, why is it called every time a thread changes??
    combineLatest(selectedNotifications$, threads$).subscribe(([selectedNotifications, threads]) => {
      const selectedNotification: Notification = selectedNotifications[0];
      const [matchingThread] = threads.filter(thread => thread.user === selectedNotification.user);

      if (selectedNotification.selected) {
        this.store.dispatch(new OpenThreadAction(matchingThread));
      }
    });
  }
}
