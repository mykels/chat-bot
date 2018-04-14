import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../../user/types/user';

@Pipe({name: 'sortByOnline'})
export class SortByOnline implements PipeTransform {
  transform(users: User[], ...args: any[]): any {
    return (users && users.length) > 0 ? this.sortUsersByOnline(users) : [];
  }

  sortUsersByOnline(users: User[]): User[] {
    return users.sort((user: User, otherUser: User) => {
      const userOnlineScore = user.online ? 1 : -1;
      const otherUserOnlineScore = otherUser.online ? 1 : -1;

      return otherUserOnlineScore - userOnlineScore;
    });
  }
}
