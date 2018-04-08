import {NgModule} from '@angular/core';
import {MESSAGES_COMPONENTS} from './components';
import {MessagesModuleRouting} from './messages.routing';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesModuleRouting
  ],
  declarations: [
    ...MESSAGES_COMPONENTS
  ],
  providers: [],
  exports: [
    ...MESSAGES_COMPONENTS
  ]
})
export class MessagesModule {
}
