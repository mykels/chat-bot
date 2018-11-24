import {Injectable} from '@angular/core';
import {AppState} from '../../core/store/types/app-state';
import {ActionsSubject, Store} from '@ngrx/store';
import {Message} from '../types/message';
import {UpdateLastMessageAction} from '../../core/store/last-message/last-message.actions';

@Injectable()
export class MessageService {
  constructor(private store: Store<AppState>,
              private actionsSubject: ActionsSubject) {
  }

  init() {
    this.subscribeToMessages();
    this.subscribeToMessageActions();
  }

  private subscribeToMessages() {
    this.store.select('messages')
      .subscribe(messages => {
        this.dispatchLastMessage(messages);
      })
  }

  private dispatchLastMessage(messages: Message[]) {
    const lastMessage = messages[messages.length - 1];
    this.store.dispatch(new UpdateLastMessageAction(lastMessage));
  }

  private subscribeToMessageActions() {
    this.actionsSubject.subscribe(action => {
      console.log('MessageService:', action.type);
    })
  }
}
