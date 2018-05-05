import {AbstractReducer} from '../util/abstract-reducer';
import {
  ADD_NOTIFICATION,
  AddNotificationAction,
  EMPTY_NOTIFICATIONS,
  REMOVE_NOTIFICATION,
  RemoveNotificationAction,
  SELECT_NOTIFICATION,
  SelectNotificationAction,
} from './notification.actions';
import {Notification} from '../../../notification/types/notification';

export class NotificationReducer extends AbstractReducer<Notification[]> {
  constructor() {
    super();
    this.register(ADD_NOTIFICATION, this.addNotification);
    this.register(REMOVE_NOTIFICATION, this.removeNotification);
    this.register(SELECT_NOTIFICATION, (notifications: Notification[], action: SelectNotificationAction) =>
      this.selectNotification(notifications, action));
    this.register(EMPTY_NOTIFICATIONS, this.emptyNotifications);
  }

  addNotification(notifications: Notification[], action: AddNotificationAction): Notification[] {
    const newNotification: Notification = action.payload;
    console.log(`handling dispatched action [${ADD_NOTIFICATION}] with notification [${newNotification.id}]`);
    return [...notifications, newNotification];
  }

  removeNotification(notifications: Notification[], action: RemoveNotificationAction): Notification[] {
    const notificationToRemove: Notification = action.payload;
    console.log(`handling dispatched action [${REMOVE_NOTIFICATION}] with notification [${notificationToRemove.id}]`);
    const updatedNotifications = notifications.filter(notification => notification.id !== notificationToRemove.id);
    return [...updatedNotifications];
  }

  selectNotification(notifications: Notification[], action: SelectNotificationAction): Notification[] {
    const toggledNotification: Notification = action.payload;
    console.log(`handling dispatched action [${SELECT_NOTIFICATION}] with notification [${toggledNotification.id}]`);

    notifications.forEach(notification => notification.selected = false);
    toggledNotification.selected = true;

    const filteredNotifications = notifications.filter(notification => notification.id !== toggledNotification.id);

    return [...filteredNotifications, {...toggledNotification}];
  }


  emptyNotifications(): Notification[] {
    console.log(`handling dispatched action [${EMPTY_NOTIFICATIONS}]`);
    return [];
  }
}
