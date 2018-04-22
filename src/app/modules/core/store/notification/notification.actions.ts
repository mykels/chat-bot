import {AbstractAction} from '../util/abstract-action';
import {Notification} from '../../../notification/types/notification';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'SELECT_NOTIFICATION';
export const SELECT_NOTIFICATION = 'SELECT_NOTIFICATION';
export const UNSELECT_NOTIFICATION = 'UNSELECT_NOTIFICATION';
export const EMPTY_NOTIFICATIONS = 'EMPTY_NOTIFICATIONS';

export class AddNotificationAction extends AbstractAction<Notification> {
  get type(): string {
    return ADD_NOTIFICATION;
  }
}

export class RemoveNotificationAction extends AbstractAction<Notification> {
  get type(): string {
    return REMOVE_NOTIFICATION;
  }
}

export class SelectNotificationAction extends AbstractAction<Notification> {
  get type(): string {
    return SELECT_NOTIFICATION;
  }
}

export class UnselectNotificationAction extends AbstractAction<Notification> {
  get type(): string {
    return UNSELECT_NOTIFICATION;
  }
}

export class EmptyNotificationsAction extends AbstractAction<Notification> {
  get type(): string {
    return EMPTY_NOTIFICATIONS;
  }
}

export type NotificationActions =
  AddNotificationAction |
  RemoveNotificationAction |
  SelectNotificationAction |
  UnselectNotificationAction |
  EmptyNotificationsAction;
