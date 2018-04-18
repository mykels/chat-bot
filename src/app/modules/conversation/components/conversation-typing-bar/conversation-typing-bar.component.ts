import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../../thread/types/message';

export const ENTER_KEY_CODE = 13;

@Component({
  selector: 'cb-conversation-typing-bar',
  templateUrl: './conversation-typing-bar.component.html',
  styleUrls: ['./conversation-typing-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationTypingBarComponent implements OnInit {
  @Output() onSend = new EventEmitter<Message>();

  messageContent = '';

  ngOnInit(): void {
  }

  sendMessage() {
    this.onSend.emit(this.constructMessage());
    this.messageContent = '';
  }

  onKeyPress(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.keyCode === ENTER_KEY_CODE) {
      this.sendMessage();
      keyboardEvent.preventDefault();
    }
  }

  constructMessage(): Message {
    // TODO: choose sender to be current user

    return {
      id: Math.floor(Math.random() * 100000),
      content: this.messageContent,
      date: new Date()
    }
  }
}
