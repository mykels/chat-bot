import {Action} from '@ngrx/store';
import {User} from '../../../user/types/user';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export class AddUserAction implements Action {
  readonly type = ADD_USER;
  payload: User;

  constructor(addedUser: User) {
    this.payload = addedUser;
  }
}

export class UpdateUserAction implements Action {
  readonly type = UPDATE_USER;
  payload: User;

  constructor(updatedUser: User) {
    this.payload = updatedUser;
  }
}

export type UserActions = AddUserAction | UpdateUserAction;
