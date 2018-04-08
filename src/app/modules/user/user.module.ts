import {NgModule} from '@angular/core';
import {USER_SERVICES} from './services';

@NgModule({
  imports: [],
  declarations: [
  ],
  providers: [
    ...USER_SERVICES
  ],
  exports: []
})
export class UserModule {
}
