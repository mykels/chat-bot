import {NgModule} from '@angular/core';
import {MESSAGE_PIPES} from './pipes';

@NgModule({
  imports: [],
  declarations: [
    ...MESSAGE_PIPES
  ],
  providers: [],
  exports: [
    ...MESSAGE_PIPES
  ]
})
export class MessageModule {
}
