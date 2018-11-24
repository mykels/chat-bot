import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../user/services/user.service';
import {ThreadService} from '../../../thread/services/thread.service';
import {BotService} from '../../../bot/services/bot/bot.service';
import {NotificationService} from '../../../notification/services/notification.service';
import {MessageService} from '../../../message/services/message.service';

@Component({
  selector: 'cb-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {


  constructor(private userService: UserService,
              private threadService: ThreadService,
              private notificationService: NotificationService,
              private botService: BotService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.userService.init();
    this.threadService.init();
    this.notificationService.init();
    this.botService.init();
    this.messageService.init();
  }
}
