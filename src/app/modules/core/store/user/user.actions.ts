import {User} from '../../../user/types/user';
import {AbstractAction} from '../util/abstract-action';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export class AddUserAction extends AbstractAction<User> {
  get type(): string {
    return ADD_USER;
  }
}

export class UpdateUserAction extends AbstractAction<User> {
  get type(): string {
    return UPDATE_USER;
  }
}

export type UserActions = AddUserAction | UpdateUserAction;
