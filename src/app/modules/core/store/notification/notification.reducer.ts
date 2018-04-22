import {AbstractReducer} from '../util/abstract-reducer';
import {
  ADD_NOTIFICATION,
  EMPTY_NOTIFICATIONS,
  NotificationActions,
  REMOVE_NOTIFICATION,
  SELECT_NOTIFICATION,
  UNSELECT_NOTIFICATION
} from './notification.actions';
import {Notification} from '../../../notification/types/notification';

export class NotificationReducer extends AbstractReducer<Notification[], NotificationActions> {
  constructor() {
    super();
    this.register(ADD_NOTIFICATION, this.addNotification);
    this.register(REMOVE_NOTIFICATION, this.removeNotification);
    this.register(SELECT_NOTIFICATION, (notifications, action) => this.toggleNotificationSelection(notifications, action, true));
    this.register(UNSELECT_NOTIFICATION, (notifications, action) => this.toggleNotificationSelection(notifications, action, false));
    this.register(EMPTY_NOTIFICATIONS, this.emptyNotifications);
  }

  addNotification(notifications: Notification[], action: NotificationActions): Notification[] {
    const newNotification: Notification = action.payload;
    console.log(`handling dispatched action [${ADD_NOTIFICATION}] with notification [${newNotification.id}]`);
    return [...notifications, newNotification];
  }

  removeNotification(notifications: Notification[], action: NotificationActions): Notification[] {
    const notificationToRemove: Notification = action.payload;
    console.log(`handling dispatched action [${REMOVE_NOTIFICATION}] with notification [${notificationToRemove.id}]`);
    const updatedNotifications = notifications.filter(notification => notification.id !== notificationToRemove.id);
    return [...updatedNotifications];
  }

  toggleNotificationSelection(notifications: Notification[], action: NotificationActions, selected: boolean): Notification[] {
    const toggledNotification: Notification = action.payload;
    console.log(`handling dispatched action [${SELECT_NOTIFICATION}] with notification [${toggledNotification.id}]`);

    notifications.forEach(notification => notification.selected = !selected);
    toggledNotification.selected = selected;

    const filteredNotifications = notifications.filter(notification => notification.id !== notification.id);

    return [...filteredNotifications, {...toggledNotification}];
  }


  emptyNotifications(): Notification[] {
    console.log(`handling dispatched action [${EMPTY_NOTIFICATIONS}]`);
    return [];
  }
}
