import {Thread} from '../../../thread/types/thread';
import {AbstractAction} from '../util/abstract-action';

export const ADD_THREAD = 'ADD_THREAD';
export const OPEN_THREAD = 'OPEN_THREAD';
export const CLOSE_THREAD = 'CLOSE_THREAD';

export class AddThreadAction extends AbstractAction<Thread> {
  get type(): string {
    return ADD_THREAD;
  }
}

export class OpenThreadAction extends AbstractAction<Thread> {
  get type(): string {
    return OPEN_THREAD;
  }
}

export class CloseThreadAction extends AbstractAction<Thread> {
  get type(): string {
    return CLOSE_THREAD;
  }
}

export type ThreadActions = AddThreadAction | OpenThreadAction | CloseThreadAction;
