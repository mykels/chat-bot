import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../message/types/message';
import {CONVERSATION_MESSAGES_ANIMATIONS} from '../conversation-messages/conversation-messages.animation';

@Component({
  selector: 'cb-conversation-message',
  templateUrl: './conversation-message.component.html',
  styleUrls: ['./conversation-message.component.css'],
  animations: CONVERSATION_MESSAGES_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationMessageComponent implements OnInit {
  @Input() message: Message;

  ngOnInit(): void {
  }
}
