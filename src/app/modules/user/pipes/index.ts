import {ExtractUserPipe} from './extract-user.pipe';
import {FirstNamePipe} from './first-name.pipe';
import {SortByUserNamePipe} from './sort-by-user-name.pipe';

export const USER_PIPES = [
  ExtractUserPipe,
  SortByUserNamePipe,
  FirstNamePipe
];
