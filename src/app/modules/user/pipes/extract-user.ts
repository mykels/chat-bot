import {Pipe, PipeTransform} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../types/user';

@Pipe({name: 'extractUser'})
export class ExtractUser implements PipeTransform {
  constructor(private userService: UserService) {

  }

  transform(userId: number, ...args: any[]): User {
    return this.userService.getById(userId);
  }
}
