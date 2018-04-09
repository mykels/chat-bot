import {Injectable} from '@angular/core';
import {User} from '../types/user';
import {interval} from 'rxjs/observable/interval';
import {Store} from '@ngrx/store';
import {AddUserAction, UpdateUserAction} from '../../core/store/user/user.actions';
import {AppState} from '../../core/store/types/app-state';

@Injectable()
export class UserService {
  private usersToAdd: User[];
  private users: User[];

  constructor(private store: Store<AppState>) {
    this.init();
  }

  init() {
    this.initCurrentUsers();
    this.initUsersToAdd();
    this.randomizeOnlineIndicator();
    this.randomizeNewUsers();
  }

  initCurrentUsers() {
    this.dispatchNewUser({id: 1, name: 'David Yahalomi', avatar: 'assets/images/avatars/dy.jpg', online: true});
    this.dispatchNewUser({id: 2, name: 'Zoe Shwartz', avatar: 'assets/images/avatars/zs.jpg', online: true});
    this.dispatchNewUser({id: 3, name: 'Liran Pesach', avatar: 'assets/images/avatars/lp.jpg', online: true});
    this.dispatchNewUser({id: 4, name: 'Nir Amsellem', avatar: 'assets/images/avatars/na.jpg', online: true});
    this.dispatchNewUser({id: 5, name: 'Michael Balber', avatar: 'assets/images/avatars/mb.jpg', online: true});

    this.store.select('users').subscribe((users: User[]) => {
      this.users = users;
    });
  }

  initUsersToAdd() {
    this.usersToAdd = [];
    this.usersToAdd.push({id: 6, name: 'Royi Freifeld', avatar: 'assets/images/avatars/rf.jpg', online: true});
    this.usersToAdd.push({id: 7, name: 'Yogev Yehuda', avatar: 'assets/images/avatars/yy.jpg', online: true});
    this.usersToAdd.push({id: 8, name: 'Guy Raviv', avatar: 'assets/images/avatars/gr.jpg', online: true});
  }

  randomizeOnlineIndicator() {
    interval(5000).subscribe(() => {
      const randomUser: User = this.users[Math.floor((Math.random() * 100) % (this.users.length - 1))];

      if (randomUser) {
        randomUser.online = !randomUser.online;
        this.store.dispatch(new UpdateUserAction(randomUser));
      }
    });
  }

  randomizeNewUsers() {
    const newUsersAdder = interval(10000).subscribe(() => {
      if (this.usersToAdd.length === 0) {
        newUsersAdder.unsubscribe();
      } else {
        this.dispatchNewUser(this.usersToAdd.pop());
      }
    });
  }

  dispatchNewUser(user: User) {
    this.store.dispatch(new AddUserAction(user));
  }
}

