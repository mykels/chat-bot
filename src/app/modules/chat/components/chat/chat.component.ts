import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {CHAT_ANIMATIONS} from './chat.animations';
import {User} from '../../../user/types/user';
import {AppState} from '../../../core/store/types/app-state';
import {Message} from '../../../message/types/message';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'cb-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: CHAT_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatComponent implements OnInit {
  users$: Observable<User[]>;
  messages$: Observable<Message[]>;
  receiver: User;
  loggedUser: User;

  constructor(private store: Store<AppState>, private userService: UserService) {
  }

  ngOnInit(): void {
    this.initUsers();
    this.initLoggedUser();
    this.initMessages();
  }

  initUsers() {
    this.users$ = this.store.select('users');
  }

  initMessages() {
    this.messages$ = this.store.select('messages');
  }

  onSelect(user: User) {
    if (user.online) {
      this.receiver = user;
    }
  }

  private initLoggedUser() {
    this.loggedUser = this.userService.getLoggedUser();
  }
}
