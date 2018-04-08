import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CORRESPONDENCE_ANIMATIONS} from './correspondence.animation';
import {User} from '../../../user/types/user';

@Component({
  selector: 'cb-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.css'],
  animations: CORRESPONDENCE_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondenceComponent implements OnInit {
  message: any;
  messageId: number;
  messageContent = '';
  messageHistory: any[] = [];

  @Input() user: User;

  constructor(private route: ActivatedRoute) {
    this.message = {};
    this.message.date = new Date().getTime();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.messageId = +params['id'];
    });
  }

  onSend() {
    this.messageHistory.push({
      content: this.messageContent,
      date: new Date().getTime()
    });

    this.messageContent = '';
  }
}
