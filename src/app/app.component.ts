import {Component, OnInit} from '@angular/core';
import {UserService} from './modules/user/services/user.service';

@Component({
  selector: 'cb-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }
}
