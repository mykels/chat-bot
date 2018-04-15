import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../thread/types/message';

@Component({
  selector: 'cb-conversation-message',
  templateUrl: './conversation-message.component.html',
  styleUrls: ['./conversation-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationMessageComponent implements OnInit {
  @Input() message: Message;

  ngOnInit(): void {
  }
}
