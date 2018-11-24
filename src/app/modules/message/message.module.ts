import {NgModule} from '@angular/core';
import {MESSAGE_PIPES} from './pipes';
import {MESSAGE_SERVICES} from './services';

@NgModule({
  imports: [],
  declarations: [
    ...MESSAGE_PIPES
  ],
  providers: [
    ...MESSAGE_SERVICES
  ],
  exports: [
    ...MESSAGE_PIPES
  ]
})
export class MessageModule {
}
