import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../types/thread';
import {Message} from '../../../message/types/message';

@Component({
  selector: 'cb-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadDetailsComponent implements OnInit {
  @Input() thread: Thread;
  @Input() messages: Message[];

  ngOnInit(): void {
  }
}
