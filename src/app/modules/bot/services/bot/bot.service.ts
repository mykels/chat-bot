import {Injectable} from '@angular/core';
import {AppState} from '../../../core/store/types/app-state';
import {Store} from '@ngrx/store';
import {Message} from '../../../message/types/message';
import {generateId} from '../../../core/services/utils';
import {AddMessageAction} from '../../../core/store/message/message.actions';
import {UserService} from '../../../user/services/user.service';
import {User} from '../../../user/types/user';

@Injectable()
export class BotService {
  constructor(private store: Store<AppState>, private userService: UserService) {
  }

  init() {
    this.subscribeToMessages();
    this.autonomifyMessages();
  }

  private subscribeToMessages() {
    this.store.select('messages').subscribe(messages => {
      const lastMessage = messages[messages.length - 1];
      setTimeout(() => {
        if (lastMessage.self) {
          this.store.dispatch(new AddMessageAction(this.constructReplyFromMessage(lastMessage), this.userService.getLoggedUser()));
        }
      }, (Math.floor(Math.random() * 2000) + 300));
    });
  }

  private constructReplyFromMessage(message: Message): Message {
    return {
      id: generateId(),
      sender: message.receiver,
      receiver: message.sender,
      content: this.constructContent(message.content),
      self: false,
      seen: false,
      date: new Date()
    }
  }

  private constructContent(content: string) {
    if (this.containsPattern(content, ['hi', 'hey', 'hello'])) {
      return 'Hey dude';
    } else if (this.containsPattern(content, ['up', 'doing', 'how', 'feel'])) {
      return 'I\'m great man, how are you today?';
    } else if (this.containsPattern(content, ['good', 'great', 'amazing'])) {
      return 'Well I\'m happy for you';
    } else {
      return 'whatchu talkin bout willis?';
    }
  }

  private containsPattern(str: string, patterns: string[]): boolean {
    for (let i = 0; i < patterns.length; i++) {
      if (str.toLowerCase().indexOf(patterns[i]) >= 0) {
        return true;
      }
    }

    return false;
  }

  private autonomifyMessages(): void {
    this.store.select('users').subscribe(users => {
      const randomUser = users[Math.floor(Math.random() * (users.length - 1))];
      setTimeout(() => {
        this.store.dispatch(new AddMessageAction(this.constructReplyFromUser(randomUser,
          this.userService.getLoggedUser()), this.userService.getLoggedUser()));
      }, (Math.floor(Math.random() * 2000) + 300));
    });
  }

  private constructReplyFromUser(randomUser: User, loggedUser: User): Message {
    return {
      id: generateId(),
      sender: randomUser.id,
      receiver: loggedUser.id,
      content: 'Just saying hi..',
      self: false,
      seen: false,
      date: new Date()
    }
  }
}
