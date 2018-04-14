import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../thread/types/message';
import {CONVERSATION_MESSAGES_ANIMATIONS} from './conversation-messages.animation';

@Component({
  selector: 'cb-conversation-messages',
  templateUrl: './conversation-messages.component.html',
  styleUrls: ['./conversation-messages.component.css'],
  animations: CONVERSATION_MESSAGES_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationMessagesComponent implements OnInit {
  @Input() messages: Message[];

  ngOnInit(): void {
  }
}
