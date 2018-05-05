import {Injectable} from '@angular/core';
import {AppState} from '../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {Message} from '../../message/types/message';
import {Notification} from '../types/notification';
import {generateId} from '../../core/services/utils';
import {AddNotificationAction, EmptyNotificationsAction} from '../../core/store/notification/notification.actions';
import {UserService} from '../../user/services/user.service';
import {User} from '../../user/types/user';

@Injectable()
export class NotificationService {
  constructor(private store: Store<AppState>, private userService: UserService) {

  }

  init(): void {
    this.subscribeToMessages();
  }

  private subscribeToMessages() {
    this.store.select('messages').subscribe(messages => {
      this.emptyNotifications();

      const aggregatedMessages = messages.filter(message => this.isRelevantMessage(message))
        .reduce((accMessages, message) => this.aggregateMessages(accMessages, message), new Map<string, Message[]>());

      aggregatedMessages.forEach((aggregatedMessagesValue: Message[], userId: string) => {
        const notification = this.constructNotificationFromMessage(userId, aggregatedMessagesValue);
        this.dispatchNewNotification(notification);
      });
    });
  }

  private isRelevantMessage(message: Message): boolean {
    const loggedUser = this.userService.getLoggedUser();
    return !message.seen && message.receiver === loggedUser.id;
  }

  private constructNotificationFromMessage(userId: string, messages: Message[]): Notification {
    const sender = this.userService.getById(userId);
    return {
      id: generateId(),
      user: sender.id,
      content: this.constructContent(sender, messages),
      data: new Date()
    }
  }

  private dispatchNewNotification(notification: Notification): void {
    this.store.dispatch(new AddNotificationAction(notification));
  }

  private aggregateMessages(aggregatedMessages: Map<String, Message[]>, message: Message): Map<String, Message[]> {
    if (aggregatedMessages.has(message.sender)) {
      aggregatedMessages.set(message.sender, [...aggregatedMessages.get(message.sender), message]);
    } else {
      aggregatedMessages.set(message.sender, [message]);
    }

    return aggregatedMessages;
  }

  private emptyNotifications() {
    this.store.dispatch(new EmptyNotificationsAction());
  }

  private constructContent(sender: User, messages: Message[]) {
    const messagesCountAlert = messages.length === 1 ? 'a message' : `${messages.length} messages`;
    return `${sender.name} sent you ${messagesCountAlert} (${messages[messages.length - 1].content.substr(0, 10)}...)`;
  }
}
