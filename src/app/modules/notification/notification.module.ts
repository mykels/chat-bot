import {NgModule} from '@angular/core';
import {NOTIFICATION_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {NOTIFICATION_SERVICES} from 'app/modules/notification/services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule
  ],
  declarations: [
    ...NOTIFICATION_COMPONENTS
  ],
  providers: [
    ...NOTIFICATION_SERVICES
  ],
  exports: [
    ...NOTIFICATION_COMPONENTS
  ]
})
export class NotificationModule {
}
