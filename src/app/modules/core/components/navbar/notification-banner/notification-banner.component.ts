import {Component, Input, OnInit} from '@angular/core';
import {NOTIFICATION_BANNER_ANIMATIONS} from './notification-banner.animation';

@Component({
  selector: 'cb-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.css'],
  animations: NOTIFICATION_BANNER_ANIMATIONS

})
export class NotificationBannerComponent implements OnInit {
  @Input() notificationCount: number;

  ngOnInit(): void {
  }
}
