import {NgModule} from '@angular/core';
import {NOTIFICATION_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {NOTIFICATION_PIPES} from './pipe';
import {NOTIFICATION_SERVICES} from './services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule
  ],
  declarations: [
    ...NOTIFICATION_COMPONENTS,
    ...NOTIFICATION_PIPES
  ],
  providers: [
    ...NOTIFICATION_SERVICES
  ],
  exports: [
    ...NOTIFICATION_COMPONENTS,
    ...NOTIFICATION_PIPES
  ]
})
export class NotificationModule {
}
