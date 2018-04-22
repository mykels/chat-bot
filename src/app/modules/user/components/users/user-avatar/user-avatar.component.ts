import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cb-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersAvatarComponent implements OnInit {
  @Input() avatar: string;
  @Input() size = 50;

  ngOnInit(): void {
  }
}
