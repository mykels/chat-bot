import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cb-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages: any[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.messages.push({
        id: i,
        sender: 'David Yahalomi',
        summary: 'This is message summary',
        date: new Date().getTime()
      });
    }
  }

  ngOnInit(): void {
  }
}
