import {FilterByThreadPipe} from './filter-by-thread.pipe';
import {FilterByParticipantsPipe} from './filter-by-participants.pipe';

export const MESSAGE_PIPES = [
  FilterByThreadPipe,
  FilterByParticipantsPipe
];
