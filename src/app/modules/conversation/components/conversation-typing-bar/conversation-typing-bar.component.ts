import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../../message/types/message';
import {UserService} from '../../../user/services/user.service';
import {generateId} from '../../../core/services/utils';

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

  constructor(private userService: UserService) {

  }

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
    return {
      id: generateId(),
      sender: this.userService.getLoggedUser().id,
      content: this.messageContent,
      date: new Date(),
      seen: false,
      self: true
    }
  }
}
