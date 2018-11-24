import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/types/app-state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Notification} from '../../../notification/types/notification';
import {User} from '../../../user/types/user';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNotifications = false;
  notifications$: Observable<Notification[]>;
  loggedUser: User;

  constructor(private store: Store<AppState>,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.initNotifications();
    this.initLoggedUser();
  }

  onNotificationBannerClick() {
    this.showNotifications = !this.showNotifications;
  }

  private initNotifications() {
    this.notifications$ = this.store.select('notifications');
  }

  private initLoggedUser() {
    this.loggedUser = this.userService.getLoggedUser();
  }
}
