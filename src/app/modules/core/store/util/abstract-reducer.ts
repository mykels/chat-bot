import {Action} from '@ngrx/store';

export abstract class AbstractReducer<T, A extends Action> {
  private actorMap: Map<string, any>;

  constructor() {
    this.actorMap = new Map<string, any>();
  }

  reduce(state: T, action: A): T {
    const actor = this.actorMap.get(action.type);
    return actor ? actor(state, action) : state;
  }

  protected register(type: string, actor: any): AbstractReducer<T, A> {
    this.actorMap.set(type, actor);
    return this;
  }
}
