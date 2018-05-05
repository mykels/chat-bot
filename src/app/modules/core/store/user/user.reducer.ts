import {User} from '../../../user/types/user';
import {ADD_USER, AddUserAction, UPDATE_USER, UpdateUserAction} from './user.actions';
import {AbstractReducer} from '../util/abstract-reducer';

export class UserReducer extends AbstractReducer<User[]> {
    constructor() {
        super();
        this.register(ADD_USER, this.addUser);
        this.register(UPDATE_USER, this.updateUser);
    }

    addUser(users: User[], action: AddUserAction): User[] {
        const newUser: User = action.payload;
        console.log(`handling dispatched action [${ADD_USER}] with user [${newUser.id}]`);
        return [...users, newUser];
    }

    updateUser(users: User[], action: UpdateUserAction): User[] {
        const updatedUser: User = action.payload;
        console.log(`handling dispatched action [${UPDATE_USER}] with user [${updatedUser.id}]`);
        return [...users.filter(user => user.id !== updatedUser.id), {...updatedUser}];
    }
}
