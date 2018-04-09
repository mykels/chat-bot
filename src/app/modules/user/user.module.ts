import {NgModule} from '@angular/core';
import {USER_SERVICES} from './services';
import {USER_PIPES} from './pipes';

@NgModule({
  imports: [],
  declarations: [
    ...USER_PIPES
  ],
  providers: [
    ...USER_SERVICES
  ],
  exports: [
    ...USER_PIPES
  ]
})
export class UserModule {
}
