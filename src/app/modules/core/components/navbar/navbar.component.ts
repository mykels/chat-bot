import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/types/app-state';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/count';
import {Observable} from 'rxjs/Observable';
import {Notification} from '../../../notification/types/notification';

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNotifications = false;
  notifications$: Observable<Notification[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.initNotifications();
  }

  onNotificationBannerClick() {
    this.showNotifications = !this.showNotifications;
  }

  private initNotifications() {
    this.notifications$ = this.store.select('notifications');
  }
}
