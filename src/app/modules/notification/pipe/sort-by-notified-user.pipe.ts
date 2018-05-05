import {Pipe, PipeTransform} from '@angular/core';
import {UserService} from '../../user/services/user.service';
import {Notification} from '../types/notification';

@Pipe({name: 'sortByNotifiedUser'})
export class SortByNotifiedUserPipe implements PipeTransform {
  constructor(private userService: UserService) {

  }

  transform(notifications: Notification[], ...args: any[]): Notification[] {
    return (notifications && notifications.length) > 0 ? this.sortByNotifiedUser(notifications) : [];
  }

  sortByNotifiedUser(notifications: Notification[]): Notification[] {
    return notifications.sort((notification: Notification, otherNotification: Notification) => {
      const user = this.userService.getById(notification.user);
      const otherUser = this.userService.getById(otherNotification.user);

      return user.name.localeCompare(otherUser.name);
    });
  }
}
