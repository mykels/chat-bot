import {Thread} from '../../../thread/types/thread';
import {AbstractAction} from '../util/abstract-action';

export const ADD_THREAD = 'ADD_THREAD';

export class AddThreadAction extends AbstractAction<Thread> {
  get type(): string {
    return ADD_THREAD;
  }
}

export type ThreadActions = AddThreadAction;
