import {AbstractAction} from '../util/abstract-action';
import {Notification} from '../../../notification/types/notification';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'SELECT_NOTIFICATION';
export const SELECT_NOTIFICATION = 'SELECT_NOTIFICATION';
export const EMPTY_NOTIFICATIONS = 'EMPTY_NOTIFICATIONS';

export class AddNotificationAction extends AbstractAction<Notification> {
  constructor(notification: Notification) {
    super(ADD_NOTIFICATION, notification);
  }
}

export class RemoveNotificationAction extends AbstractAction<Notification> {
  constructor(notification: Notification) {
    super(REMOVE_NOTIFICATION, notification);
  }
}

export class SelectNotificationAction extends AbstractAction<Notification> {
  constructor(notification: Notification) {
    super(SELECT_NOTIFICATION, notification);
  }
}

export class EmptyNotificationsAction extends AbstractAction<Notification> {
  constructor() {
    super(EMPTY_NOTIFICATIONS, undefined);
  }
}
