import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../types/user';

@Component({
  selector: 'cb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() onSelect = new EventEmitter<User>();

  ngOnInit(): void {
  }
}
