import {Action} from '@ngrx/store';

export abstract class AbstractAction<T> implements Action {
  readonly _payload: T;

  constructor(payload: T) {
    this._payload = payload;
  }

  get payload(): T {
    return this._payload;
  }

  abstract get type(): string;
}
