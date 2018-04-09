import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {CHAT_ANIMATIONS} from './chat.animations';
import {User} from '../../../user/types/user';
import {AppState} from '../../../core/store/types/app-state';

@Component({
  selector: 'cb-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: CHAT_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatComponent implements OnInit {
  contactedUser: any;
  private userState$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initUsers();
  }

  initUsers() {
    this.userState$ = this.store.select('users');
  }

  onContactClick(user: User) {
    if (user.online) {
      this.contactedUser = user;
    }
  }

  extractId(user: User) {
    return user.id;
  }
}
