import {User} from '../../../user/types/user';
import {ADD_USER, UPDATE_USER, UserActions} from './user.actions';

export const userReducer = (users: User[], action: UserActions) => {
  switch (action.type) {
    case ADD_USER:
      const newUser: User = action.payload;
      console.log(`handling dispatched action [${ADD_USER}] with user [${newUser.id}]`);
      return [...users, newUser];
    case UPDATE_USER:
      const updatedUser: User = action.payload;
      console.log(`handling dispatched action [${UPDATE_USER}] with user [${updatedUser.id}]`);
      return [...users.filter(user => user.id !== updatedUser.id), {...updatedUser}];
    default:
      return users;
  }
};
