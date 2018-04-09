import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../user/types/user';
import {CONVERSATION_ANIMATIONS} from './conversation.animation';

export const ENTER_KEY_CODE = 13;

// TODO: better be called conversation and conversant
@Component({
  selector: 'cb-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  animations: CONVERSATION_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent implements OnInit {
  message: any;
  messageId: number;
  messageContent = '';
  messageHistory: any[] = [];

  @Input() user: User;

  constructor() {
    this.message = {};
    this.message.date = new Date().getTime();
  }

  ngOnInit(): void {
  }

  onKeyPress(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.keyCode === ENTER_KEY_CODE) {
      this.onSend();
      keyboardEvent.preventDefault();
    }
  }

  onSend() {
    this.messageHistory.push({
      content: this.messageContent,
      date: new Date().getTime()
    });

    this.messageContent = '';
  }
}
