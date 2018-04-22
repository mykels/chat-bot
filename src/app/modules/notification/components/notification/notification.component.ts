import {Component, Input, OnInit} from '@angular/core';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {SelectNotificationAction} from '../../../core/store/notification/notification.actions';
import {Notification} from '../../types/notification';

@Component({
  selector: 'cb-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.store.dispatch(new SelectNotificationAction(this.notification));
  }
}
