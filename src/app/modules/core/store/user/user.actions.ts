import {User} from '../../../user/types/user';
import {AbstractAction} from '../util/abstract-action';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export class AddUserAction extends AbstractAction<User> {
    constructor(user: User) {
        super(ADD_USER, user);
    }
}

export class UpdateUserAction extends AbstractAction<User> {
    constructor(user: User) {
        super(UPDATE_USER, user);
    }
}
