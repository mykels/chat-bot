import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../types/user';

@Pipe({name: 'sortByUserName'})
export class SortByUserNamePipe implements PipeTransform {
  transform(users: User[], ...args: any[]): any {
    return (users && users.length) > 0 ? this.sortUsersByName(users) : [];
  }

  sortUsersByName(users: User[]): User[] {
    return users.sort((user: User, otherUser: User) => {
      return user.name.localeCompare(otherUser.name);
    });
  }
}
