import {Action} from '@ngrx/store';

export abstract class AbstractReducer<T, A extends Action> {
  private actorMap: Map<string, any>;

  protected constructor() {
    this.actorMap = new Map<string, any>();
  }

  abstract reduce(state: T, action: A): void;

  register(type: string, actor: any): AbstractReducer<T, A> {
    this.actorMap.set(type, actor);
    return this;
  }

  default() {

  }

}
