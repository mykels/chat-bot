import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../types/thread';

// TODO: make thread-details part of threads components instead of an outlined one

@Component({
  selector: 'cb-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadDetailsComponent implements OnInit {
  @Input() thread: Thread;

  ngOnInit(): void {
  }
}
