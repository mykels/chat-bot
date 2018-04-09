import {Component, OnInit} from '@angular/core';
import {UserService} from './modules/user/services/user.service';
import {ThreadService} from './modules/thread/services/thread.service';

@Component({
  selector: 'cb-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService,
              private threadService: ThreadService) {

  }

  ngOnInit(): void {
  }
}
