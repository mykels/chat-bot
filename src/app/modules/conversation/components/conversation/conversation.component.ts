import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../user/types/user';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {AddMessageAction} from '../../../core/store/message/message.actions';
import {Message} from '../../../message/types/message';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'cb-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent implements OnInit, AfterViewChecked {
  @Input() subject: User;
  @Input() messages?: Message[] = [];
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  constructor(private store: Store<AppState>, private userService: UserService) {
  }

  ngOnInit(): void {
    this.scrollToBottom();
  }

  onSend(message: Message) {
    message.receiver = this.subject.id;
    this.store.dispatch(new AddMessageAction(message, this.userService.getLoggedUser()));
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
