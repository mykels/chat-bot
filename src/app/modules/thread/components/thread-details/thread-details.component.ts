import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Thread} from '../../types/thread';

@Component({
  selector: 'cb-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadDetailsComponent implements OnInit {
  @Input() thread: Thread;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
}
