import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Message} from '../../../message/types/message';
import {UpdateSeenMessageAction} from '../../../core/store/message/message.actions';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';

@Component({
    selector: 'cb-conversation-messages',
    templateUrl: './conversation-messages.component.html',
    styleUrls: ['./conversation-messages.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationMessagesComponent implements OnInit, OnChanges {
    @Input() messages: Message[];

    constructor(private store: Store<AppState>) {

    }

    ngOnInit(): void {
        this.notifySeenMessages();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['messages'] && !changes['messages'].isFirstChange()) {
            this.notifySeenMessages();
        }
    }

    private notifySeenMessages() {
        setTimeout(() => {
            this.messages
                .filter(message => !message.seen)
                .forEach(notSeenMessage => {
                    this.store.dispatch(new UpdateSeenMessageAction(notSeenMessage));
                });
        }, 0);
    }
}
