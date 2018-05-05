import {Thread} from '../../../thread/types/thread';
import {AbstractAction} from '../util/abstract-action';

export const ADD_THREAD = 'ADD_THREAD';
export const UPDATE_THREAD = 'UPDATE_THREAD';
export const OPEN_THREAD = 'OPEN_THREAD';
export const CLOSE_THREAD = 'CLOSE_THREAD';

export class AddThreadAction extends AbstractAction<Thread> {
    constructor(thread: Thread) {
        super(ADD_THREAD, thread);
    }
}

export class UpdateThreadAction extends AbstractAction<Thread> {
    constructor(thread: Thread) {
        super(UPDATE_THREAD, thread);
    }
}

export class OpenThreadAction extends AbstractAction<Thread> {
    constructor(thread: Thread) {
        super(OPEN_THREAD, thread);
    }
}

export class CloseThreadAction extends AbstractAction<Thread> {
    constructor(thread: Thread) {
        super(CLOSE_THREAD, thread);
    }
}
