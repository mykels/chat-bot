import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/store/types/app-state';
import {generateId} from '../../core/services/utils';
import {UserService} from '../../user/services/user.service';
import {AddMessageAction} from '../../core/store/message/message.actions';
import {Message} from '../../message/types/message';
import 'rxjs/add/operator/take';

@Injectable()
export class ThreadService {
  constructor(private store: Store<AppState>, private userService: UserService) {
  }

  init() {
    this.initThreads();
  }

  initThreads() {
    this.store.select('users')
      .take(1)
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
}
