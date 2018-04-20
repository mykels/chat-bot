import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../message/types/message';

@Component({
  selector: 'cb-conversation-messages',
  templateUrl: './conversation-messages.component.html',
  styleUrls: ['./conversation-messages.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationMessagesComponent implements OnInit {
  @Input() messages: Message[];

  ngOnInit(): void {
  }
}
