import {Component, OnInit} from '@angular/core';
import {UserService} from './modules/user/services/user.service';
import {ThreadService} from './modules/thread/services/thread.service';
import {BotService} from './modules/bot/services/bot/bot.service';

@Component({
  selector: 'cb-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService,
              private threadService: ThreadService,
              private botService: BotService) {

  }

  ngOnInit(): void {
    this.userService.init();
    this.threadService.init();
    this.botService.init();
  }
}
