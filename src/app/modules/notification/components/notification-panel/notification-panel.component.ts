import {Component, Input, OnInit} from '@angular/core';
import {NOTIFICATION_PANEL_ANIMATIONS} from './notification-panel.animations';

@Component({
  selector: 'cb-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css'],
  animations: NOTIFICATION_PANEL_ANIMATIONS
})
export class NotificationPanelComponent implements OnInit {
  @Input() show: boolean;
  @Input() notifications: Notification[];

  constructor() {

  }

  ngOnInit(): void {
  }
}
