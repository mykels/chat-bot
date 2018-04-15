import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../user/types/user';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {AddMessageAction} from '../../../core/store/message/message.actions';
import {Message} from '../../../thread/types/message';

@Component({
  selector: 'cb-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent implements OnInit {
  @Input() receiver: User;
  @Input() messages?: Message[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  onSend(message: Message) {
    message.receiver = this.receiver.id;
    message.sender = this.receiver.id; // TODO: get real sender
    this.store.dispatch(new AddMessageAction(message));
  }
}
