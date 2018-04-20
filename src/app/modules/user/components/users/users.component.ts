import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../types/user';

@Component({
  selector: 'cb-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  @Input() users: User[];
  @Output() onSelect = new EventEmitter<User>();

  ngOnInit(): void {
  }

  trackByUserId(user: User): string {
    return user.id;
  }

  onClick(user: User): void {
    this.onSelect.emit(user);
  }
}
