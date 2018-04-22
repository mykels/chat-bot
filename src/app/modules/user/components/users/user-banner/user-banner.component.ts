import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../types/user';

@Component({
  selector: 'cb-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersBannerComponent implements OnInit {
  @Input() user: User;

  ngOnInit(): void {
  }
}
