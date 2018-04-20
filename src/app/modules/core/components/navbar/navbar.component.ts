import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/types/app-state';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/count';

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  unseenMessages = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.computeUnseenMessages();
  }

  private computeUnseenMessages() {
    this.store.select('messages')
      .subscribe(messages => {
        this.unseenMessages = messages
          .filter(message => !message.seen)
          .reduce(count => count + 1, 0);
      });
  }
}
